const chai = require('chai');
const chaihttp = require('chai-http');
const { response } = require('../index');
const index = require('../index');

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmOTE3MiIsImlhdCI6MTYzNzEzODEwMywiZXhwIjoxNjM5NzMwMTAzfQ.ldAZemcMd-2e_xYCSDnJHFYM3yuqgxEomc9upfQj834';

chai.should();
chai.use(chaihttp);
describe('Common Routes', () => {
  it('will get class group', (done) => {
    chai
      .request(index)
      .get('/class-group')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done();
      });
  });
  it('will get skills', (done) => {
    chai
      .request(index)
      .get('/skills')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done();
      });
  });
  it('will get schools', (done) => {
    chai
      .request(index)
      .get('/schools')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done();
      });
  });
  it('will username if available', (done) => {
    chai
      .request(index)
      .get('/username?username=kjbndskbfsdbfnn')
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('will get url of file', (done) => {
    chai
      .request(index)
      .get('/file/16')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
});
