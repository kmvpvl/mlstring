import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
        "preset": 'ts-jest',
        "testEnvironment": "jsdom",
        "transform": {
          "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
        },
        "transformIgnorePatterns": [
          "node_modules/(?!variables/.*)"
        ]
      ,
      verbose: true,
};
export default config;

