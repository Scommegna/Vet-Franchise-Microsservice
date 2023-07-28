// Class for error handling
export class CustomAPIError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Creates custom error when called
export const createCustomError = function (msg: string, statusCode: number) {
  return new CustomAPIError(msg, statusCode);
};
