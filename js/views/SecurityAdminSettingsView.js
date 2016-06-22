'use strict';

var
	_ = require('underscore'),
	ko = require('knockout'),
	
	ModulesManager = require('modules/CoreClient/js/ModulesManager.js'),
	CAbstractSettingsFormView = ModulesManager.run('SettingsClient', 'getAbstractSettingsFormViewClass'),
	
	Settings = require('modules/CoreClient/js/Settings.js')
;

/**
* @constructor
*/
function CSecurityAdminSettingsView()
{
	CAbstractSettingsFormView.call(this, Settings.ServerModuleName);
	
	/* Editable fields */
	this.login = ko.observable(Settings.AdminLogin);
	this.pass = ko.observable('xxxxxxxxxx');
	this.newPass = ko.observable('xxxxxxxxxx');
	this.confirmPass = ko.observable('xxxxxxxxxx');
	/*-- Editable fields */
}

_.extendOwn(CSecurityAdminSettingsView.prototype, CAbstractSettingsFormView.prototype);

CSecurityAdminSettingsView.prototype.ViewTemplate = 'CoreClient_SecurityAdminSettingsView';

CSecurityAdminSettingsView.prototype.getCurrentValues = function()
{
	return [
		this.login(),
		this.pass(),
		this.newPass(),
		this.confirmPass()
	];
};

CSecurityAdminSettingsView.prototype.revertGlobalValues = function()
{
	this.login(Settings.AdminLogin);
	this.pass('xxxxxxxxxx');
	this.newPass('xxxxxxxxxx');
	this.confirmPass('xxxxxxxxxx');
};

CSecurityAdminSettingsView.prototype.getParametersForSave = function ()
{
	return {
		'AdminLogin': this.login(),
		'Password': this.pass(),
		'NewPassword': this.newPass()
	};
};

/**
 * @param {Object} oParameters
 */
CSecurityAdminSettingsView.prototype.applySavedValues = function (oParameters)
{
//	Settings.updateSecurity(oParameters.AdminLogin);
};

CSecurityAdminSettingsView.prototype.setAccessLevel = function (sEntitiesName, iEntityId)
{
	this.visible(sEntitiesName === '');
};

module.exports = new CSecurityAdminSettingsView();