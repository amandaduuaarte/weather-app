module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleNameMapper: {
    'react-native-permissions':
      '<rootDir>/node_modules/react-native-permissions/mock',
  },
};
