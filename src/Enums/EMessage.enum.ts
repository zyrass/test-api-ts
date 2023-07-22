export enum ESTATUS_CODES {
    SUCCESS = 200,
    CREATED = 201,
    REDIRECT_PERMANENTLY = 301,
    REDIRECT_TEMPORARLY = 302,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
    INTERNAL_SERVER_ERROR = 500,
    GATEWAY_TIMEOUT = 504,
}