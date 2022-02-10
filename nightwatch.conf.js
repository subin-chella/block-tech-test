module.exports = {
  src_folders: ["tests"],
  skip_testcases_on_fail: false,
  page_objects_path: "pageobjects",
  custom_commands_path: "./commands",

  webdriver: {
    start_process: true,
    log_path:'./logs', 
    port: 9515,
    server_path: "./resources/chromedriver.exe",
},

  screenshots: {
      enabled: true,
      path: "./screenshots",
      on_failure: true,
      on_error: true
  },
  test_settings: {
      default: {
        launch_url: 'https://andersbrownworth.com/blockchain/hash',
          desiredCapabilities: {
              browserName: 'chrome',
              }
          
      },
      //Parallel tests
      test_workers: {
          enabled: true,
          workers: 'auto'
      },

     
  }
}