describe('SHA256 hash page', () => {
    
   
    var  hashPage = browser.page.hash();
    it('Page title is correct', (browser) => {
              
        hashPage
               .pause(2000)
               .navigate()
               .maximizeWindow()
               
               .assert.title("Blockchain Demo");
          
    }),

    it('Enter some text and get sha256 hashed outputs', (browser) => {
              
          hashPage
                 .setValue('@inputTextArea','Hash me!!')
                 .getValue('@hashOutField' , async (actualHashedString) =>{

                    var enc= browser.sha256Encryption('Hash me!!', async (hash)=>{
                        

                        console.log(browser.hash);
                    }) 
                   
                 });

                 console.log(browser);
           browser.end();       
      });
   
  });