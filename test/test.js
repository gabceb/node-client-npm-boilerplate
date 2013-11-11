require('mocha');

var NpmPackage = require('../index'),
	should = require('should'),
	util = require('util');

require('./fixtures/fixtures');

var client = null;

describe('npm-package', function(){

	beforeEach(function(){
		client = new NpmPackage();
	});

	describe('initialization', function(){
		it('should create a new instance of the NpmPackage class', function(done){
			client.should.be.an.instanceOf(NpmPackage)

			done();
		});
	});

	// Add other tests here
});