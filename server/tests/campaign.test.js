const request = require('supertest');
const app = require('../app'); // Import app

describe("Campaign API", () => {
    it("should create a new campaign", async () => {
        const res = await request(app)
            .post('/api/campaign/create')
            .send({ name: "Test Campaign", message: "Hello", contacts: ["+123456789"] });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Test Campaign");
    });
});
