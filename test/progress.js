// const chai = require('chai');
// const chaihttp = require('chai-http');
// const { response } = require('../index');
// const index = require('../index');

// const token =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmMTgzMjg2IiwiaWF0IjoxNjMxMDg1NzA2LCJleHAiOjE2MzM2Nzc3MDZ9.i7LJD1ykx0jKTXRALxpbvWv7lVnaK6_p8IRNZMm7KuU';

// chai.should();
// chai.use(chaihttp);
// describe('Progress routes', () => {
//   it('will get points and level', (done) => {
//     chai
//       .request(index)
//       .get('/profile/progress/22')
//       .set('Authorization', token)
//       .end((err, response) => {
//         response.should.have.status(200);
//         done();
//       });
//   });
//   it('will get history with rewards and certificates etc', (done) => {
//     chai
//       .request(index)
//       .get('/profile/progress-line?profileId=3')
//       .set('Authorization', token)
//       .end((err, response) => {
//         response.should.have.status(200);
//         done();
//       });
//   });
// });
