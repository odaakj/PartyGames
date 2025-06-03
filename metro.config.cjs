const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add support for additional extensions if needed
config.resolver.sourceExts.push("cjs", "mjs");

module.exports = config;

//defaultConfig.resolver.unstable_enablePackageExports = false;
//lagt til
config.resolver.unstable_enablePackageExports = false;
module.exports = config;