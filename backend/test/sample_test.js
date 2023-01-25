const chai = require('chai');
const chaiHttp = require('chai-http');
// const should = chai.should();
var mongoose = require("mongoose");
chai.use(chaiHttp);

describe('API Testing', () => {

    it('it should success to retrive all data', (done) => {
      chai.request('http://localhost:4000') // chai meminta base URL dan port kita
          .post('/api/users') // 'get' disini adalah REST method dan '/' adalah endpoint kita 
          .send({
            'firstName' : 'juan',
            'lastName' : 'hanafi',
            'email' : 'juan@gmail.com',
            'password' : 'Juan@12',
          })
          
          .end((err, res) => {
            // kita melakukan response assertion disini
            expect(res.body).to.have.status(200);
            // expect(res.body).to.have.property('fullname');
            expect(res.body[0].year).to.equal(2014);
          });
       done();
    });
  });