/*
* @Author: Subin Chellapandiann
* Test suite for hash page. 
* Demonstracte POM and Custom commandss

*/


describe('SHA256 hash page', () => {

    //Creating an instance for the POM
    var hashPage = browser.page.hash();
    
    //Test 1
    it('Page title is correct', (browser) => {

        hashPage
            .pause(3000)
            .navigate()
            .maximizeWindow()
            .assert.title("Blockchain Demo");

    }),

    //Test 2
    it('Enter some text and get sha256 hashed outputs', (browser) => {

            hashPage
                .setValue('@inputTextArea', 'Hash me!!')
                .getValue('@hashOutField', async (actualHashedString) => {

                        browser.sha256Encryption('Hash me!!', async (expectedHashString) => {
                        console.log(expectedHashString);
                        browser.assert.equal(expectedHashString, actualHashedString.value)

                    })

                });


            browser.end();
     });

});