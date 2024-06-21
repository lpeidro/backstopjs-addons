module.exports = async (page, scenario, vp, ir, Engine, config) => {
  await require(config.backstopjsAddons.commonScriptsPath + '/loadCookies')(page, scenario);
};
