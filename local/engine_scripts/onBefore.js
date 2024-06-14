module.exports = async (page, scenario, vp, ir, Engine, config) => {
  await require(config.custom.commonScriptsPath + '/loadCookies')(page, scenario);
};
