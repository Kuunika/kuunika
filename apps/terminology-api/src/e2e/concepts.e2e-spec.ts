
import { Test, TestingModule } from '@nestjs/testing';
import * as axios from 'axios';
import { Category } from '@kuunika/terminology-interfaces';
import { RedisSingleton } from "../../../libs/redis-connection/src/lib/redis-singleton";

describe('Concept (e2e)', () => {

  it('/concepts (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC/MDT-88678f');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data).toBeTruthy();
  });

  it('/concepts (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC/MDT-88678f');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(typeof requestToCategoriesApi.data).toBe('object');
  });

  it('/concepts (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC/MDT-88678f');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data.id).toBe('MDT-88678f');
  });
  
  it('/concepts (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC/MDT-88678f');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data.breadcrumbs).toBe('Clinical/Terms/ICD10');
  });
});
