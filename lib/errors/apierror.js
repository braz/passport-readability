/**
 * `APIError` error.
 *
 * References:
 *   - http://www.readability.com/developers/api
 *
 * @constructor
 * @param {String} [message]
 * @param {Number} [code]
 * @api public
 */
function APIError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'APIError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
APIError.prototype.__proto__ = Error.prototype;


/**
 * Expose `APIError`.
 */
module.exports = APIError;
