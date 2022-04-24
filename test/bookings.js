const chai = require('chai');
const chaihttp = require('chai-http');
const { response } = require('../index');
const index = require('../index');

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4JjYzMzQiLCJpYXQiOjE2MzgzNTkxNTcsImV4cCI6MTY0MDk1MTE1N30.wzW7owbMuDN6Kh2DCR_HEsZz9wZdpkM4CR3tdm4V-18';

chai.should();
chai.use(chaihttp);
describe('Bookings', () => {
  it('will get upcoming bookings', (done) => {
    chai
      .request(index)
      .get('/my-bookings/upcoming/slots')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  // it('will get previous bookings', (done) => {
  //   chai
  //     .request(index)
  //     .get('/my-bookings/previous')
  //     .set('Authorization', token)
  //     .end((err, response) => {
  //       response.should.have.status(200);
  //       done();
  //     });
  // });
  // it('will get panel', (done) => {
  //   chai
  //     .request(index)
  //     .get('/my-bookings/panel/1')
  //     .set('Authorization', token)
  //     .end((err, response) => {
  //       done();
  //     });
  // });
});
