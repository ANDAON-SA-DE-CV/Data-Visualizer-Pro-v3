# Data Visualizer Pro v3 📊

[![CI/CD Pipeline](https://github.com/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3/actions/workflows/ci.yml/badge.svg)](https://github.com/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3/branch/main/graph/badge.svg)](https://codecov.io/gh/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Sistema avanzado de visualización de datos con AI, ML y análisis predictivo**

## ✨ Características Principales

- 🚀 **Monorepo con TypeScript** - Arquitectura modular y escalable
- 🧪 **Jest Testing** - 150+ tests con 100% de cobertura de código
- 🔄 **CI/CD Pipeline** - Automatización completa con GitHub Actions
- 📊 **Visualizaciones Avanzadas** - Soporte para múltiples tipos de gráficos
- 🤖 **Machine Learning** - Pipelines de ML integrados
- 🔍 **Análisis Predictivo** - Detección de anomalías y tendencias
- 🎨 **Bubble.io Plugin** - Integración nativa con Bubble
- ⚡ **Backend Escalable** - API REST con Node.js y TypeScript

## 🏗️ Arquitectura

\\\
data-visualizer-pro-v3/
├── packages/@dv/
│   ├── shared/          # Utilidades compartidas (MathUtils)
│   ├── charts-engine/   # Motor de gráficos (ChartFactory, DataTransformer)
│   ├── ml-pipelines/    # Pipelines de ML (DataPreprocessor)
│   ├── backend/         # Servicios backend (AnalyticsService)
│   └── bubble-plugin/   # Plugin de Bubble (ChartConfigurator)
├── .github/workflows/   # CI/CD con GitHub Actions
└── docs/               # Documentación
\\\

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18.x o superior
- pnpm 8.x o superior
- Git

### Instalación

\\\ash
# Clonar el repositorio
git clone https://github.com/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3.git
cd Data-Visualizer-Pro-v3

# Instalar dependencias
pnpm install

# Ejecutar tests
pnpm run test

# Construir el proyecto
pnpm run build
\\\

## 🧪 Testing

El proyecto incluye una suite completa de tests:

\\\ash
# Ejecutar todos los tests
pnpm run test

# Tests con cobertura
pnpm run test:coverage

# Tests en modo watch
pnpm run test:watch
\\\

### Estadísticas de Testing

- **Total de Tests**: 150+
- **Cobertura**: 100% (Statements, Branches, Functions, Lines)
- **Módulos Testeados**: 5 packages principales

## 📊 Módulos Principales

### @dv/shared
- **MathUtils**: Funciones estadísticas
- **Tests**: 16 tests con 100% cobertura

### @dv/charts-engine
- **ChartFactory**: Creación de gráficos dinámicos
- **DataTransformer**: Transformación y validación de datos
- **Tests**: 51 tests con 100% cobertura

### @dv/ml-pipelines
- **DataPreprocessor**: Preprocesamiento de datos para ML
- **Tests**: 24 tests con 100% cobertura

### @dv/backend
- **AnalyticsService**: Gestión de datos y análisis
- **Tests**: 30 tests con 100% cobertura

### @dv/bubble-plugin
- **ChartConfigurator**: Configuración de gráficos para Bubble
- **Tests**: 29 tests con 100% cobertura

## 🔄 CI/CD Pipeline

Pipeline automatizado con GitHub Actions:

- ✅ Tests en Node.js 18.x y 20.x
- ✅ Linting con ESLint
- ✅ Build y generación de artefactos
- ✅ Cobertura de código con Codecov
- ✅ Quality gates automatizados

## 📁 Scripts Disponibles

\\\ash
# Desarrollo
pnpm run build          # Construir proyecto
pnpm run test           # Ejecutar tests
pnpm run test:coverage  # Tests con cobertura
pnpm run lint           # Linting con ESLint
pnpm run format         # Formateo con Prettier

# Despliegue
pnpm run deploy:bubble  # Desplegar plugin de Bubble
pnpm run deploy:backend # Desplegar backend
\\\

## 🛠️ Tecnologías

- **Frontend**: TypeScript, Plotly.js, ECharts
- **Backend**: Node.js, TypeScript, Express
- **ML**: TensorFlow.js
- **Testing**: Jest, ts-jest
- **CI/CD**: GitHub Actions
- **Monorepo**: pnpm workspaces

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (\git checkout -b feature/amazing-feature\)
3. Commit tus cambios (\git commit -m 'Add amazing feature'\)
4. Push a la rama (\git push origin feature/amazing-feature\)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Desarrollado por ANDAON-SA-DE-CV**
