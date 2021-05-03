import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/infrastructure/nestjs/app.module';

describe('SearchItemsByQuery', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Should return four items by query', async () => {
    const { body, status } = await request(app.getHttpServer()).get(
      `/items?q=iphone`,
    );
    expect(status).toEqual(200);
    expect(body.items).toHaveLength(4);
    expect(body.categories).toBeDefined();
    expect(body.author).toBeDefined();
  });
});
