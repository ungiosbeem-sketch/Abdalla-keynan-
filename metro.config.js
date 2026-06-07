const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for additional file types
  'cjs'
);

config.watchFolders = [__dirname];

module.exports = config;
