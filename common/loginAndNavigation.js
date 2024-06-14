module.exports = async(page, scenario, config) => {

  if (scenario.login_wrapper) {
    const user = scenario.login_user ?? config.custom.login_user;
    const pass = scenario.login_pass ?? config.custom.login_pass;

    if (user && pass) {
      await page.waitForSelector(scenario.login_wrapper);
      await page.type(scenario.login_wrapper + ' input[name="name"]', user);
      await page.type(scenario.login_wrapper + ' input[name="pass"]', pass);
      await page.keyboard.press('Enter'); // Enter Key
      await page.waitForNavigation({ waitUntil: 'networkidle0'});

      if (scenario.login_redirect) {
        await page.goto(scenario.login_redirect, {
          waitUntil: 'networkidle0',
        });
      }
    }
  }
};
