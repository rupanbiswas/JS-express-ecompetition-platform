const chai = require('chai');
const chaihttp = require('chai-http');
const { response } = require('../index');
const index = require('../index');

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmOTE3MiIsImlhdCI6MTYzNzEzODEwMywiZXhwIjoxNjM5NzMwMTAzfQ.ldAZemcMd-2e_xYCSDnJHFYM3yuqgxEomc9upfQj834';

chai.should();
chai.use(chaihttp);
describe('Challenges', () => {
  it('will discover all challenges', (done) => {
    chai
      .request(index)
      .get('/challenges/discover/all?class_group_id=1')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  // it('will discover challenges for particular month', (done) => {
  //   chai
  //     .request(index)
  //     .get('/challenges/discover?month=8&year=2021&class=1')
  //     .set('Authorization', token)
  //     .end((err, response) => {
  //       response.should.have.status(200);
  //       done();
  //     });
  // });
  it('will discover particular challenge', (done) => {
    chai
      .request(index)
      .get('/challenges/detail?filter=1&type=id')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('will get particular theme', (done) => {
    chai
      .request(index)
      .get('/challenges/theme/1')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('will get particular slots', (done) => {
    chai
      .request(index)
      .get('/challenges/slots?challengeId=1&profileId=1')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  // it('will get recomended challenges', (done) => {
  //   chai
  //     .request(index)
  //     .post('/challenges/recomemded?class_group_id=2')
  //     .send({
  //       cart_items: [],
  //     })
  //     .set('Authorization', token)
  //     .end((err, response) => {
  //       response.should.have.status(200);
  //       done();
  //     });
  // });
});
