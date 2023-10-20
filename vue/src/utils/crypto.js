const CryptoJS = require('crypto-js')

module.exports = {
    async encryptPass(hex) {
        return CryptoJS.AES.encrypt(hex, '02aab0f70eca03ff2e2397cb91076262').toString();
    },
    async decrypt(hex) {
        const bytes  = CryptoJS.AES.decrypt(hex, '02aab0f70eca03ff2e2397cb91076262');
        return  bytes.toString(CryptoJS.enc.Utf8);
    }
}