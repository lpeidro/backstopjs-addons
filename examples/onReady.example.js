module.exports = async(page, scenario, vp, ir, Engine, config) => {
  console.log('SCENARIO > ' + scenario.label);
  await require(config.backstopjsAddons.commonScriptsPath + '/loginAndNavigation')(page, scenario, config);
  await require('./customScenarioActions')(page, scenario, vp);
  await require(config.backstopjsAddons.commonScriptsPath + '/setup')(page, scenario, config);
  await require(config.backstopjsAddons.commonScriptsPath + '/clickAndHoverHelper')(page, scenario);
};
