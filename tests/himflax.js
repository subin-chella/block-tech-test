/*
* @Author: Subin Chellapandiann
* Test suite for himflax homepage. 
* Demonstracte BDD

*/
module.exports = {
    homePage: function (browser) {
      browser.url('https://www.himflax.com/')
      .maximizeWindow()
      .pause(5000)
      .expect.title().to.contain('Online marketing agency | web development services company');
      browser
      .click('#menu-item-10578 > a')
      .click('#menu-item-10746 > a')
      .expect.title().to.contain('Hybrid App Development - Himflax');

      // few bdd tests
      browser.expect.cookie('nitroCachedPage').to.contain('1');
      //Check if the fb messanger is active
      browser.expect.element('.page-title').to.be.not.active;
           
      browser.expect.element('[title~=\'Enquiry\']').to.be.an('a');
      browser.expect.element('[title~=\'Enquiry\']').to.have.attribute('href');
       }
  };