import { Inject, Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { MERCADO_LIBRE_API_AXIOS_INSTANCE } from './axiosInstance';

@Injectable()
export class MercadoLibreApi {
  constructor(
    @Inject(MERCADO_LIBRE_API_AXIOS_INSTANCE)
    private mercadoLibreApi: AxiosInstance,
  ) {}

  async getItemsByQuery(query: string) {
    return this.mercadoLibreApi
      .get(`sites/MLA/search`, {
        params: { q: query },
      })
      .then((response) => response.data);
  }

  async getItemDetail(itemId: string) {
    return this.mercadoLibreApi
      .get(`items/${itemId}`)
      .then((response) => response.data);
  }

  async getItemDescription(itemId: string) {
    return this.mercadoLibreApi
      .get(`items/${itemId}/description`)
      .then((response) => response.data);
  }
}
