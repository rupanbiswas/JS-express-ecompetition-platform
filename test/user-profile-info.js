const chai = require('chai');
const chaihttp = require('chai-http');
const { response } = require('../index');
const index = require('../index');

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmOTE3MiIsImlhdCI6MTYzNzEzODEwMywiZXhwIjoxNjM5NzMwMTAzfQ.ldAZemcMd-2e_xYCSDnJHFYM3yuqgxEomc9upfQj834';

chai.should();
chai.use(chaihttp);
describe('user profile info', () => {
  it('will post user details', (done) => {
    chai
      .request(index)
      .post('/user/details')
      .set('Authorization', token)
      .send({
        first_name: 'rupan',
        last_name: 'biswas',
        email: 'rupanbiswas18rb@gmail.com',
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('id');
        done();
      });
  });
  it('will get user details', (done) => {
    chai
      .request(index)
      .get('/user/details')
      .set('Authorization', token)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('id');
        done();
      });
  });
  it('will update user details', (done) => {
    chai
      .request(index)
      .post('/user/details')
      .set('Authorization', token)
      .send({
        first_name: 'rupa',
        last_name: 'biswa',
        email: 'rupanbiswas18rb@gmail.com',
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('id');
        done();
      });
  });
  it('will get classGroup', (done) => {
    chai
      .request(index)
      .get('/class-group')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done();
      });
  });
  // it('will get user profiles', (done) => {
  //   chai
  //     .request(index)
  //     .get('/user/profile/details')
  //     .set('Authorization', token)
  //     .end((err, response) => {
  //       response.should.have.status(200);
  //       done();
  //     });
  // });
  it('will post user profile details', (done) => {
    chai
      .request(index)
      .post('/user/profile/details')
      .set('Authorization', token)
      .send({
        school_name: 'rupan school',
        city: 'siliguri',
        country: 'india',
        profile_pic_id: 5,
        student_name: 'rupan',
        class_id: '5',
        class_group: '5-6',
        dob: '2020-08-18',
        gender: 'male',
        school_card_id: 6,
        selected_option: 0,
      })
      .end((err, response) => {
        response.should.have.status(201);
        done();
      });
  });

  it('will update user profile details', (done) => {
    chai
      .request(index)
      .put('/user/profile/details/1')
      .set('Authorization', token)
      .send({
        school_name: 'rupan school',
        city: 'siliguri',
        country: 'india',
        profile_pic_id: 5,
        student_name: 'rup',
        class_id: '5',
        class_group: '5-6',
        dob: '2020-08-18',
        gender: 'male',
        school_card_id: 6,
        selected_option: 0,
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('array');
        done();
      });
  });
});
