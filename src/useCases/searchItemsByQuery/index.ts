import { Injectable } from '@nestjs/common';
import { MercadoLibreApi } from '../../infrastructure/mercadoLibreApi/MercadoLibreApi';

@Injectable()
export class SearchItemsByQuery {
  constructor(private mercadoLibreApi: MercadoLibreApi) {}

  async searchItemsByQuery(query: string): Promise<any> {
    const data = await this.mercadoLibreApi.getItemsByQuery(query);

    let categories = [];
    data.filters.forEach((filter) => {
      if (filter.id === 'category') {
        categories = filter.values[0].path_from_root.map((c) => {
          return c.name;
        });
      }
    });

    const items = data.results.slice(0, 4).map((result) => ({
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: Intl.NumberFormat().format(result.price),
        decimals: result.price.toString().split('.')[1] ?? 0,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
      state: result.seller_address.state.name,
    }));

    return {
      author: {
        name: '',
        lastname: '',
      },
      categories,
      items: items,
    };
  }
}
