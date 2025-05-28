export const HttpStatusCode = {
  success: 200,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
};

export type HttpStatusCode =
  (typeof HttpStatusCode)[keyof typeof HttpStatusCode];

export interface HttpResponse<ResponseType> {
  statusCode: HttpStatusCode;
  body?: ResponseType;
}
