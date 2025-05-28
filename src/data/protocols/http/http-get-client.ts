import { type HttpResponse } from '.';

export interface HttpGetParams {
  url: string;
  headers?: Record<string, string | number | boolean>;
}

export interface HttpGetClient<ResponseType> {
  get: (params: HttpGetParams) => Promise<HttpResponse<ResponseType>>;
}
