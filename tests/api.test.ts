import request from 'supertest';
import { expect, describe, it } from 'vitest';
import app from '../src/index';

describe('health endpoint', () => {
    it('should get a response from the GET /health endpoint', async () => {
        const response = await request(app).get('/health');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'ok' });
    });
});

// describe('authentication endpoints', () => {
//     it('should get a positive response from the registration endpoint', async () => {
//         const body = { email: 'foo@bar.com', password: 'qwerty123' }; // , username: 'dude'
//         const response = await request(app).post('/auth/register').send(body);

//         expect(response.status).toBe(200);
//     });
// });
