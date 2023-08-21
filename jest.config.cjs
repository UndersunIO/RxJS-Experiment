/* eslint-disable no-undef */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"

    },
    setupFilesAfterEnv: ['./src/jest.setup.ts']
};
