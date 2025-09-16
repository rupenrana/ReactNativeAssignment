export class AppError extends Error {
  code: string;
  isRetryable: boolean;

  constructor(message: string, code: string = "UNKNOWN_ERROR", isRetryable: boolean = false) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
    this.code = code;
    this.isRetryable = isRetryable;
    }
  }