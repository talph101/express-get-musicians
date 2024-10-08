// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test('The response to an endpoint can be accessed using the supertest package', async () => {
        const response = await request(app).get("/musicians");
        expect(response.body).toEqual(expect.any(Array));
    })


    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    });    
    
})

describe('Tests for Express Musicians Part 2', () => {
    test("should respond ID parameter value 1", async () => {
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        const responseData = response.body;
        expect(responseData.id).toEqual(1);
      });
})
