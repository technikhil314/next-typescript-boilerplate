module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true,
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        }
    }
};