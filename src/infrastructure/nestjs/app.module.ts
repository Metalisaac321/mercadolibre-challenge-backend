import { Module } from '@nestjs/common';
import {
  mercadoLibreApiAxiosInstance,
  MERCADO_LIBRE_API_AXIOS_INSTANCE,
} from '../mercadoLibreApi/axiosInstance';
import { MercadoLibreApi } from '../mercadoLibreApi/MercadoLibreApi';
import { GetItemDetail } from '../../useCases/getItemDetail';
import { GetItemDetailController } from '../../useCases/getItemDetail/controller';
import { SearchItemsByQuery } from '../../useCases/searchItemsByQuery';
import { SearchItemsByQueryController } from '../../useCases/searchItemsByQuery/controller';

@Module({
  imports: [],
  providers: [
    {
      useValue: mercadoLibreApiAxiosInstance,
      provide: MERCADO_LIBRE_API_AXIOS_INSTANCE,
    },
    MercadoLibreApi,
    SearchItemsByQuery,
    GetItemDetail,
  ],
  controllers: [SearchItemsByQueryController, GetItemDetailController],
})
export class AppModule {}
