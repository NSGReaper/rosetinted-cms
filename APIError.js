'use strict';

module.exports = APIError;
function APIError(code, message) {
  this._code = code;
  this._message = message;
}

APIError.prototype.getMessage = function () {
  return this._message;
};
APIError.prototype.getCode = function () {
  return this._code;
};
APIError.prototype.getObject = function () {
  return { code: this._code, error: this._message };
};
