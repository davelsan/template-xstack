/* eslint-env node */

// Learn more https://docs.expo.dev/guides/monorepos
// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');

const { getDefaultConfig } = require('expo/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// // Support for react-native-svg-transformer
// config.transformer.babelTransformerPath = require.resolve(
//   'react-native-svg-transformer'
// );
// config.resolver.assetExts = config.resolver.assetExts.filter(
//   (ext) => ext !== 'svg'
// );
// config.resolver.sourceExts.push('svg');

module.exports = config;
