import request from 'supertest';

import app from './app';

describe('app', () => {
  describe('GET /tasks', () => {
    it('responses 200', (done) => {
      request(app)
        .get('/tasks')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('POST /tasks', () => {
    describe('with valid attributes', () => {
      it('response 201', (done) => {
        request(app)
          .post('/tasks')
          .send({ title: '할 일1' })
          .set('Accept', 'application/json')
          .expect(201, done);
      });
    });

    describe('with invalid attributes', () => {
      it('response 400', (done) => {
        request(app)
          .post('/tasks')
          .send({ title: '' })
          .set('Accept', 'application/json')
          .expect(400, done);
      });
    });
  });
});
