import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/infrastructure/nestjs/app.module';

describe('getItemDetail', () => {
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

  it('Shoul return item detail', async () => {
    const itemId = 'MLA911614135';

    const { body, status } = await request(app.getHttpServer()).get(
      `/items/${itemId}`,
    );
    expect(status).toEqual(200);
    expect(body.item).toBeDefined();
    expect(body.author).toBeDefined();
  });
});
