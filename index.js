var util = require('util'),
	request = require('request'),
	events = require('events'),
	_und = require('underscore'),
	_und_s = require('underscore.string');

var _my = null;

var debug;

if (/\bverbose\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    console.error('DEBUG: %s', util.format.apply(util, arguments))
  }
} else {
  debug = function() {}
}

var clientURL = "http://URL-TO-API";

var NpmPackage = function(url){
	this.url = url || clientURL;
	_my = { stations : {} };
};

NpmPackage.prototype = new events.EventEmitter;

module.exports = NpmPackage;

NpmPackage.prototype.fetch = function(){
	var self = this;

	request({uri : this.url, json : true }, function(error, response, body){
		
		if(!error && response.statusCode == 200){
			self.original_response = body;
			self.response = self.original_response.stationBeanList

			// Do something here

			self.emit("fetch");
		}
		else{
			self.emit("error", error, response.statusCode );
		}
	});
};