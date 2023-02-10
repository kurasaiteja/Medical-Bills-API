const request = require('supertest');
const app = require('../app');


describe('POST /bills', () => {
  it('should create a new medical bill', async () => {
    const bill = {
      patientName: 'Saiteja',
      patientAddress: '15 Maywood St',
      hospitalName: 'Boston General Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    };
    const res = await request(app).post('/bills').send(bill);
    expect(res.statusCode).toBe(200);
    console.log(res.body)
    expect(res.body).toHaveProperty('patientName', bill.patientName);
    expect(res.body).toHaveProperty('patientAddress', bill.patientAddress);
    expect(res.body).toHaveProperty('hospitalName', bill.hospitalName);
    expect(res.body).toHaveProperty('dateOfService', bill.dateOfService);
    expect(res.body).toHaveProperty('billAmount', bill.billAmount);
  });

  it('should return error if required fields are missing', async () => {
    const bill = {};
    const res = await request(app).post('/bills').send(bill);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'All fields are required.');
  });

  it('should return error if date of service is not a valid date', async () => {
    const bill = {
      patientName: 'Saiteja',
      patientAddress: '15 Maywood St',
      hospitalName: 'Boston General Hospital',
      dateOfService: 'invalid date',
      billAmount: 100
    };
    const res = await request(app).post('/bills').send(bill);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Date of service must be a valid date in the format YYYY-MM-DD.');
  });
});


describe('GET /bills', () => {
    it('should return a list of medical bills', async () => {
      const res = await request(app).get('/bills');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });