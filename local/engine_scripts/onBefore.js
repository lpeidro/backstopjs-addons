module.exports = async (page, scenario, vp, ir, Engine, config) => {
  await require('./loadCookies')(page, scenario);
};
