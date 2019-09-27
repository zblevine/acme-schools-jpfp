const { expect } = require('chai');
const db = require('./db');
const { School } = db.models;
const { ValidationError } = require('sequelize');
describe('Data Layer', () => {
  beforeEach(() => db.syncAndSeed());
  describe('schools', () => {
    it('schools exist', async () => {
      const schools = await School.findAll();
      expect(schools.length).to.be.above(0);
    });
  })
})