class AppError extends Error{
    constructor(statusCode, message) {
        super(message);
        this.explanation = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;