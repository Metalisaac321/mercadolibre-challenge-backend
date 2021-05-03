import axios from 'axios';

export const MERCADO_LIBRE_API_AXIOS_INSTANCE =
  'MERCADO_LIBRE_API_AXIOS_INSTANCE';

export const mercadoLibreApiAxiosInstance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
