import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

import type {
  HttpGetClient,
  HttpGetParams,
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '@/data/protocols/http';

export class AxiosHttpClient
  implements HttpPostClient<unknown, unknown>, HttpGetClient<unknown>
{
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL: import.meta.env.VITE_API_URL });
  }

  private responseAdapter(
    response: AxiosResponse<unknown>
  ): HttpResponse<unknown> {
    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  async post(params: HttpPostParams<unknown>): Promise<HttpResponse<unknown>> {
    let axiosResponse: AxiosResponse<unknown>;

    try {
      axiosResponse = await this.client.post(params.url, params.body);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        axiosResponse = error.response;
      } else {
        throw error;
      }
    }

    return this.responseAdapter(axiosResponse);
  }

  async get(params: HttpGetParams): Promise<HttpResponse<unknown>> {
    let axiosResponse: AxiosResponse<unknown>;

    try {
      axiosResponse = await this.client.get(params.url, {
        headers: params.headers,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        axiosResponse = error.response;
      } else {
        throw error;
      }
    }

    return this.responseAdapter(axiosResponse);
  }
}
