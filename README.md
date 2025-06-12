<<<<<<< HEAD
# Data Visualizer Pro v3 📊

[![CI/CD Pipeline](https://github.com/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3/actions/workflows/ci.yml/badge.svg)](https://github.com/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3/branch/main/graph/badge.svg)](https://codecov.io/gh/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3)
=======
# Data Visualizer Pro 📊

[![CI/CD Pipeline](https://github.com/ANDAON-SA-DE-CV/Data-visualizer-Pro/actions/workflows/ci.yml/badge.svg)](https://github.com/ANDAON-SA-DE-CV/Data-visualizer-Pro/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ANDAON-SA-DE-CV/Data-visualizer-Pro/branch/main/graph/badge.svg)](https://codecov.io/gh/ANDAON-SA-DE-CV/Data-visualizer-Pro)
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
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

<<<<<<< HEAD
\\\
=======
```
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
data-visualizer-pro-v3/
├── packages/@dv/
│   ├── shared/          # Utilidades compartidas (MathUtils)
│   ├── charts-engine/   # Motor de gráficos (ChartFactory, DataTransformer)
│   ├── ml-pipelines/    # Pipelines de ML (DataPreprocessor)
│   ├── backend/         # Servicios backend (AnalyticsService)
│   └── bubble-plugin/   # Plugin de Bubble (ChartConfigurator)
├── .github/workflows/   # CI/CD con GitHub Actions
<<<<<<< HEAD
└── docs/               # Documentación
\\\
=======
└── coverage/           # Reportes de cobertura
```
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18.x o superior
- pnpm 8.x o superior
- Git

### Instalación

<<<<<<< HEAD
\\\ash
# Clonar el repositorio
git clone https://github.com/ANDAON-SA-DE-CV/Data-Visualizer-Pro-v3.git
cd Data-Visualizer-Pro-v3
=======
```bash
# Clonar el repositorio
git clone git@github.com:ANDAON-SA-DE-CV/Data-visualizer-Pro.git
cd Data-visualizer-Pro
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)

# Instalar dependencias
pnpm install

<<<<<<< HEAD
# Ejecutar tests
pnpm run test

# Construir el proyecto
pnpm run build
\\\

## 🧪 Testing

El proyecto incluye una suite completa de tests:

\\\ash
=======
# Construir el proyecto
pnpm run build

# Ejecutar tests
pnpm run test

# Generar reporte de cobertura
pnpm run test:coverage
```

## 🧪 Testing

El proyecto incluye una suite completa de tests con **100% de cobertura**:

```bash
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
# Ejecutar todos los tests
pnpm run test

# Tests con cobertura
pnpm run test:coverage

# Tests en modo watch
pnpm run test:watch
<<<<<<< HEAD
\\\
=======

# Tests para CI
pnpm run test:ci
```
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)

### Estadísticas de Testing

- **Total de Tests**: 150+
- **Cobertura**: 100% (Statements, Branches, Functions, Lines)
- **Módulos Testeados**: 5 packages principales
<<<<<<< HEAD
=======
- **Tiempo de Ejecución**: ~20 segundos
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)

## 📊 Módulos Principales

### @dv/shared
<<<<<<< HEAD
- **MathUtils**: Funciones estadísticas
=======
- **MathUtils**: Funciones estadísticas (average, minMax, normalize, standardDeviation)
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
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

<<<<<<< HEAD
Pipeline automatizado con GitHub Actions:

- ✅ Tests en Node.js 18.x y 20.x
- ✅ Linting con ESLint
- ✅ Build y generación de artefactos
- ✅ Cobertura de código con Codecov
- ✅ Quality gates automatizados

## 📁 Scripts Disponibles

\\\ash
=======
El proyecto incluye un pipeline completo de CI/CD que se ejecuta automáticamente:

### Triggers
- Push a `main` o `develop`
- Pull Requests a `main` o `develop`

### Jobs
1. **Test Job**: Ejecuta en Node.js 18.x y 20.x
   - Instalación de dependencias
   - Linting (ESLint)
   - Tests unitarios
   - Cobertura de código
   - Upload a Codecov

2. **Build Job**: Construye el proyecto
   - Compilación TypeScript
   - Generación de artefactos
   - Upload de build artifacts

3. **Quality Gate**: Validación final
   - Verificación de cobertura mínima (70%)
   - Resumen de calidad

## 📁 Scripts Disponibles

```bash
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
# Desarrollo
pnpm run build          # Construir proyecto
pnpm run test           # Ejecutar tests
pnpm run test:coverage  # Tests con cobertura
<<<<<<< HEAD
=======
pnpm run test:watch     # Tests en modo watch
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
pnpm run lint           # Linting con ESLint
pnpm run format         # Formateo con Prettier

# Despliegue
pnpm run deploy:bubble  # Desplegar plugin de Bubble
pnpm run deploy:backend # Desplegar backend
<<<<<<< HEAD
\\\
=======
pnpm run deploy         # Desplegar todo
```
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)

## 🛠️ Tecnologías

- **Frontend**: TypeScript, Plotly.js, ECharts
- **Backend**: Node.js, TypeScript, Express
- **ML**: TensorFlow.js
- **Testing**: Jest, ts-jest
- **CI/CD**: GitHub Actions
- **Monorepo**: pnpm workspaces
<<<<<<< HEAD
=======
- **Linting**: ESLint, Prettier
- **Coverage**: Jest coverage, Codecov

## 📈 Cobertura de Código

El proyecto mantiene **100% de cobertura de código** en todos los módulos:

```
-----------------------|---------|----------|---------|---------|
File                   | % Stmts | % Branch | % Funcs | % Lines |
-----------------------|---------|----------|---------|---------|
All files              |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|
```
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)

## 🤝 Contribución

1. Fork el proyecto
<<<<<<< HEAD
2. Crea una rama para tu feature (\git checkout -b feature/amazing-feature\)
3. Commit tus cambios (\git commit -m 'Add amazing feature'\)
4. Push a la rama (\git push origin feature/amazing-feature\)
=======
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
5. Abre un Pull Request

## 📄 Licencia

<<<<<<< HEAD
Este proyecto está bajo la Licencia MIT.

---

**Desarrollado por ANDAON-SA-DE-CV**
=======
Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔗 Enlaces

- [Documentación](./docs/)
- [API Reference](./docs/api-reference/)
- [Contribuir](./docs/contributing.md)
- [Changelog](./CHANGELOG.md)

---

**Desarrollado con ❤️ por el equipo de Data Visualizer Pro**
>>>>>>> 35056a9 (chore: clean jest configuration conflicts)
