

import { Test, TestingModule } from '@nestjs/testing';
import * as axios from 'axios';
import { Category } from '@kuunika/terminology-interfaces';
import { RedisSingleton } from "../../../libs/redis-connection/src/lib/redis-singleton";

describe('Search (e2e)', () => {

  it('/search (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/search/polo');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data).toBeTruthy();
  });

  it('/search (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/search/polo');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(typeof requestToCategoriesApi.data).toBe('object');
  });

  it('/search (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/search/polo');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data.searchResults.length).toBe(1);
  });

  it('/search (GET)', async () => {
    const requestToCategoriesApi = await axios.default.get('http://localhost:3333/api/v0/search/polo');
    expect(requestToCategoriesApi.status).toBe(200);
    expect(requestToCategoriesApi.data.searchResults[0].numberOfResults).toBe(55);
  });
});
