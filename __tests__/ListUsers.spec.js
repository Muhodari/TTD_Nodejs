const request = require('supertest');
const app = require('../src/app');
const User = require('../src/User/User');
const sequelize = require('../src/config/database');
const { describe } = require('../src/User/User');

beforeAll(() => {
  return sequelize.sync();
});

beforeEach(() => {
  return User.destroy({ truncate: true });
});

describe('Test users', () => {
  it('returns true when the list of users is empty', (done) => {
    request(app)
      .get('/api/1.0/users')
      .send({})
      .then((response) => {
        expect(response.body.users).toBe('[]');
        done()
      });
  });
});
