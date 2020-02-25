
import { Test, TestingModule } from '@nestjs/testing';
import * as axios from 'axios';
import { Category } from '@kuunika/terminology-interfaces';
import { RedisSingleton } from "../../../libs/redis-connection/src/lib/redis-singleton";

describe('Categories (e2e)', () => {

  it('/categories (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/categories');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data).toBeTruthy();
  });

  it('/categories (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/categories');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(typeof requestToCategoriesApi.data).toBe('object');
  });

  it('/categories (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/categories');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data.length).toBe(1);
  });

  it('/categories (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/categories');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data[0].categoryTitle).toBe('Clinical');
  });
});
