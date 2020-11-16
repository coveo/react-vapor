module.exports = {
    verbose: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/setupTests/assetsTransformer.js',
        '\\.(scss|css)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./setupTests.js'],
    reporters: ['default'],
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    preset: 'jest-puppeteer',
    globals: {
        'ts-jest': {
            // relative path to the ts-jest-keys-transformer.js file
            tsConfig: 'tsconfig.test.json',
            astTransformers: ['<rootDir>/setupTests/ts-jest-keys-transformer.js'],
        },
        _: 'underscore',
    },
    testEnvironment: 'jest-environment-jsdom-fourteen',
};
