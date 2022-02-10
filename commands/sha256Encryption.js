/*
* @Author: Subin Chellapandiann
* Custom command to encrypt the text using sha2556 algorithm
* used the libraray crypto.
* Acccepets text and return hashed text

*/


const crypto = require('crypto');

var hashedText;
function sha256Encryption() { }

sha256Encryption.prototype.command = function (text, callback) {

    hashedText = crypto.createHash('sha256').update(text).digest('hex');
    callback(hashedText)



}.bind(this)

module.exports = sha256Encryption;





