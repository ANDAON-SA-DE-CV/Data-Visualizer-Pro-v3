/** @type {import('jest').Config} */
module.exports = {
  // Permite que no haya tests en un workspace sin error
  passWithNoTests: true,

  // Proyectos (uno por cada paquete que use Jest)
  projects: [
    {
      displayName: '@dv/shared',
      testMatch: ['<rootDir>/packages/@dv/shared/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/packages/@dv/shared/**/?(*.)+(spec|test).[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: {
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
      }
    },    {
      displayName: '@dv/charts-engine',
      testMatch: ['<rootDir>/packages/@dv/charts-engine/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/packages/@dv/charts-engine/**/?(*.)+(spec|test).[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: {
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
      }
    },
    {
      displayName: '@dv/ml-pipelines',
      testMatch: ['<rootDir>/packages/@dv/ml-pipelines/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/packages/@dv/ml-pipelines/**/?(*.)+(spec|test).[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: {
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
      }
    },
    {
      displayName: '@dv/backend',
      testMatch: ['<rootDir>/packages/@dv/backend/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/packages/@dv/backend/**/?(*.)+(spec|test).[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: {
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
      }
    },
    {
      displayName: '@dv/bubble-plugin',
      testMatch: ['<rootDir>/packages/@dv/bubble-plugin/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/packages/@dv/bubble-plugin/**/?(*.)+(spec|test).[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: {
            esModuleInterop: true,
            allowSyntheticDefaultImports: true
          }
        }]
      },
      moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
      }
    }
  ],

  // Dónde buscar tests
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  // Ignorar dist y node_modules
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Ejecutar en modo "mono-repo"
  roots: ['<rootDir>/packages'],

  // Transformer para TypeScript
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  // Mapeo de módulos para manejar .js imports en .ts files
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  // Configuración de cobertura
  collectCoverage: false, // Se activará con --coverage
  collectCoverageFrom: [
    'packages/@dv/*/src/**/*.{ts,tsx}',
    'packages/@dv/*/utils/**/*.{ts,tsx}',
    'packages/@dv/*/services/**/*.{ts,tsx}',
    'packages/@dv/*/admin/**/*.{ts,tsx}',
    'packages/@dv/*/core/**/*.{ts,tsx}',
    '!packages/@dv/*/src/**/*.d.ts',
    '!packages/@dv/*/src/**/*.test.{ts,tsx}',
    '!packages/@dv/*/src/**/*.spec.{ts,tsx}',
    '!packages/@dv/*/src/**/index.{ts,tsx}',
    '!packages/@dv/*/**/*.d.ts',
    '!packages/@dv/*/**/*.test.{ts,tsx}',
    '!packages/@dv/*/**/*.spec.{ts,tsx}',
    '!packages/@dv/*/**/index.{ts,tsx}',
    '!packages/@dv/*/dist/**',
    '!packages/@dv/*/node_modules/**'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
