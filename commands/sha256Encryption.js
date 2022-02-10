const crypto = require('crypto');

var hashiii ;
function sha256Encryption() {}




sha256Encryption.prototype.command = function (text) {

    hashiii = crypto.createHash('sha256').update(text).digest('hex');

   
    

}.bind(this)

module.exports = sha256Encryption;
module.exports.hashiii = hashiii;




