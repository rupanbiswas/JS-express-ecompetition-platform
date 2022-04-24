// const chai = require('chai');
// const chaihttp = require('chai-http');
// const { response } = require('../index');
// const index = require('../index');

// const token =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmMTgzMjg2IiwiaWF0IjoxNjMxMDg1NzA2LCJleHAiOjE2MzM2Nzc3MDZ9.i7LJD1ykx0jKTXRALxpbvWv7lVnaK6_p8IRNZMm7KuU';

// chai.should();
// chai.use(chaihttp);
// describe('Leader Board', () => {
//   it('will get the ranking of all schools ', (done) => {
//     chai
//       .request(index)
//       .get('/leader-board/school/all?offset=2')
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('array');
//         done();
//       });
//   });
//   it('will get the ranking of all schools according to month ', (done) => {
//     chai
//       .request(index)
//       .get('/leader-board/school?month=8&year=2021&offset=0')
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('array');
//         done();
//       });
//   });
//   it('will get the ranking of all students', (done) => {
//     chai
//       .request(index)
//       .get('/leader-board/student/all?offset=10')
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('array');
//         done();
//       });
//   });
//   it('will get the ranking of all students according to the month', (done) => {
//     chai
//       .request(index)
//       .get('/leader-board/student?month=9&year=2021&offset=0')
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('array');
//         done();
//       });
//   });
//   it('will get the result of all the profiles', (done) => {
//     chai
//       .request(index)
//       .get('/leader-board/result')
//       .set('Authorization', token)
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('array');
//         done();
//       });
//   });
// });
