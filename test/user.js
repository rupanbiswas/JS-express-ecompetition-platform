const chai = require('chai');
const chaihttp = require('chai-http');
const response = require('../index');
const index = require('../index');
const { except } = chai;
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmMTgzMjg2IiwiaWF0IjoxNjMxMDg1NzA2LCJleHAiOjE2MzM2Nzc3MDZ9.i7LJD1ykx0jKTXRALxpbvWv7lVnaK6_p8IRNZMm7KuU';

chai.should();
chai.use(chaihttp);

describe('User Auth', () => {
  // it('will take phone number and will respond with id for register', (done) => {
  //   chai
  //     .request(index)
  //     .post('/user/register')
  //     .send({ phone_number: '7908988285' })
  //     .end((err, response) => {
  //       response.should.have.status(201);
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('id');
  //       done();
  //     });
  // });
  it('otp verification of user', (done) => {
    chai
      .request(index)
      .put('/user/otp')
      .send({
        customer_id: 3,
        otp: 5380,
      })
      .end((err, response) => {
        done();
      });
  });
});
