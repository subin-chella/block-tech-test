/*
* @Author: Subin Chellapandiann
This is the simple POM for hash page

*/


module.exports = {
    url: function () {
        return 'https://andersbrownworth.com/blockchain/hash';
    },

    elements: {
        inputTextArea: {
            selector: '#data'
        },
        hashOutField: {
            selector: '#hash',
        }
    }
};