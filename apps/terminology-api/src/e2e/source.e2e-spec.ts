

import { Test, TestingModule } from '@nestjs/testing';
import * as axios from 'axios';
import { Category } from '@kuunika/terminology-interfaces';
import { RedisSingleton } from "../../../libs/redis-connection/src/lib/redis-singleton";

describe('Source (e2e)', () => {

  it('/source (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data).toBeTruthy();
  });

  it('/source (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(typeof requestToCategoriesApi.data).toBe('object');
  });

  it('/source (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/sources/DB59CC');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data.results.length).toBe(163);
  });


});
