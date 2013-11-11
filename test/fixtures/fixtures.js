var fakeweb = require('node-fakeweb'),
	fs = require('fs'),
	path = require('path');

fakeweb.allowNetConnect = false;
fakeweb.registerUri({uri: 'http://response-200.com:80', file: path.join(__dirname, 'response-200.com.json')});
fakeweb.registerUri({uri: 'http://response-500.com:80', file: path.join(__dirname, 'response-500.com.json'), statusCode: 500});