module.exports = async(page, scenario, vp, ir, Engine, config) => {
  console.log('SCENARIO > ' + scenario.label);
  await require(config.custom.commonScriptsPath + '/loginAndNavigation')(page, scenario, config);
  await require('./customScenarioActions')(page, scenario, vp);
  await require(config.custom.commonScriptsPath + '/setup')(page, scenario, config);
  await require(config.custom.commonScriptsPath + '/clickAndHoverHelper')(page, scenario);
};
