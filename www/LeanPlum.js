var exec = require('cordova/exec');
var channel = require('cordova/channel');

function Leanplum(){
	this.debug = false;
}

Leanplum.prototype.enableDebugging = function(){
	this.debug = true;
};

Leanplum.prototype.start = function(successCallback, errorCallback, userId){
	if (userId === undefined) {
		exec(successCallback,errorCallback, "Leanplum", "start", [this.debug]);
	} else {
		exec(successCallback,errorCallback, "Leanplum", "start", [this.debug, userId]);        
	}
};

Leanplum.prototype.track = function(name, data){
	if (data === undefined) {
		exec(function(success){ }, function(error){}, "Leanplum", "track", [name]);
	} else {
		exec(function(success){ }, function(error){}, "Leanplum", "track", [name, data]);
	}
};

Leanplum.prototype.registerPush = function(options){
	exec(function(success){ }, function(error){}, "Leanplum", "registerPush", [options]);
};

Leanplum.prototype.unregisterPush = function(){
	exec(function(success){ }, function(error){}, "Leanplum", "unregisterPush", []);
};

if (typeof module != 'undefined' && module.exports) {
	module.exports = new Leanplum();
}