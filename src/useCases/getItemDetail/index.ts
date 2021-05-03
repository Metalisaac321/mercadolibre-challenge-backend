import { Injectable } from '@nestjs/common';
import { MercadoLibreApi } from '../../infrastructure/mercadoLibreApi/MercadoLibreApi';

@Injectable()
export class GetItemDetail {
  constructor(private mercadoLibreApi: MercadoLibreApi) {}

  async getItemDetail(itemId: string): Promise<any> {
    const itemData = await this.mercadoLibreApi.getItemDetail(itemId);

    const itemDescription = await this.mercadoLibreApi.getItemDescription(
      itemId,
    );

    return {
      author: {
        name: '',
        lastname: '',
      },
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: new Intl.NumberFormat().format(itemData.price),
          decimals: itemData.price.toString().split('.')[1] ?? 0,
        },
        picture: itemData.pictures[0].url,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: itemDescription.plain_text,
      },
    };
  }
}
