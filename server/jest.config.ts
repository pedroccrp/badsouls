import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  testEnvironment: 'node',
};

export default config;
