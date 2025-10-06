import request from 'supertest';
import app from '../index.js';

describe('GET /api/products', () => {
  it('should return status 200 and an array of products', async () => {
    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    const product = response.body[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('imageUrl');
  });

  it('should return products with valid structure', async () => {
    const response = await request(app).get('/api/products');

    response.body.forEach((product) => {
      expect(typeof product.id).toBe('number');
      expect(typeof product.name).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.imageUrl).toBe('string');
      expect(product.price).toBeGreaterThan(0);
    });
  });
});
