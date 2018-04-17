//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
let Book = require('../models/Task');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Books', () => {
	beforeEach((done) => { //Before each test we empty the database
		Book.remove({}, (err) => { 
		   done();		   
		});		
	});
 /*
  * Test the /GET route
  */
  describe('/GET book', () => {
	  it('it should GET all the books', (done) => {
			chai.request(server)
		    .get('/Tasks')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });
  
  // below test will not run in place of comment all code use onle xdescribe
  xdescribe('/GET book', () => {
	  it('it should GET all the books', (done) => {
			chai.request(server)
		    .get('/Tasks')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });
});
  