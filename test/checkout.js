const chai = require('chai');
const chaihttp = require('chai-http');
const { response } = require('../index');
const index = require('../index');

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMmOTE3MiIsImlhdCI6MTYzNzEzODEwMywiZXhwIjoxNjM5NzMwMTAzfQ.ldAZemcMd-2e_xYCSDnJHFYM3yuqgxEomc9upfQj834';

chai.should();
chai.use(chaihttp);
describe('checkout routes', () => {
  it('will create order', (done) => {
    chai
      .request(index)
      .post('/checkout/payment-order')
      .set('Authorization', token)
      .send({ amount: 0 })
      .end((err, response) => {
        response.should.have.status(201);
        done();
      });
  });
  it('will post items for checkout', (done) => {
    chai
      .request(index)
      .post('/checkout/payment-verification')
      .set('Authorization', token)
      .send({
        total_amount: 0,
        order_id: 29,
        line_items: {
          razorpay_payment_id: 'pay_I5XCRYuaeIeZ1K',
          razorpay_order_id: 'order_I5XCDOzkiT2nKQ',
          razorpay_signature:
            '7bbb7695c839d852f3d6bd8200f13a7bb1813fbad900953ab81db7b311fc7d2d',
          order_id: 29,
          total_amount: 0,
          line_items: [
            {
              challenge_id: 1,
              profile_id: 5985,
              slot_id: 4,
              line_amount: 0,
              class_group_id: 5,
              skill_id: 5,
              challenge_name: 'hakunamatata',
              profile_name: 'yoo',
              slot_date_time: '2021-10-30',
              slot_start_time: '456-454-4531',
              slot_end_time: '  13:08:40',
            },
          ],
        },
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        done();
      });
  });
});
