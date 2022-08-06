module.exports = {
	collectCoverageFrom: [
		'<rootDir>/src/actions/**',
		'<rootDir>/src/components/**',
		'<rootDir>/src/hooks/**',
		'<rootDir>/src/reducers/**',
		'<rootDir>/src/selectors/**'
	],
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: [
		'html', 
		'text'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10
		}
	},
	rootDir: '../',
	setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.js'],
	testEnvironment: 'jest-environment-jsdom',
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__tests__/fileTransformer.js'
	},
	verbose: true
}
