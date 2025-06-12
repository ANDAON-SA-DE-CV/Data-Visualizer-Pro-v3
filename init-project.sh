#!/bin/bash

# Función para crear directorios con .gitkeep
create_dir() {
  mkdir -p "$1"
  touch "$1/.gitkeep"
}

# Función para crear un archivo vacío si no existe
create_file() {
  if [ ! -f "$1" ]; then
    touch "$1"
  fi
}

# Función para crear package.json básicos
create_package_json() {
  cat <<EOL > "$1/package.json"
{
  "name": "$2",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "test": "jest"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.11.19",
    "@types/jest": "^29.5.8",
    "jest": "^29.7.0"
  }
}
EOL
}

# Función para crear tsconfig.json básicos
create_tsconfig() {
  cat <<EOL > "$1/tsconfig.json"
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"]
}
EOL
}

# Crear estructura base
create_dir backend
create_dir bubble
create_dir bubble-plugin-final
create_dir config
create_dir dist
create_dir dev
create_dir models
create_dir node_modules
create_dir scripts
create_dir src
create_dir docs
create_dir infra
create_dir packages/@dv/backend
create_dir packages/@dv/charts-engine
create_dir packages/@dv/bubble-plugin
create_dir packages/@dv/ml-pipelines
create_dir packages/@dv/shared

# Crear archivos principales
touch .env
touch package.json
touch README.md

# Backend
create_dir backend/src
create_dir backend/src/api
create_dir backend/src/services
create_dir backend/src/utils
create_dir backend/src/jobs
create_dir backend/src/config

create_file backend/src/server.ts
create_file backend/src/api/report.controller.ts
create_file backend/src/api/analytics.controller.ts
create_file backend/src/api/ml.controller.ts
create_file backend/src/api/nlp.controller.ts
create_file backend/src/services/reportService.ts
create_file backend/src/services/mlService.ts
create_file backend/src/services/analyticsService.ts
create_file backend/src/services/nlpService.ts
create_file backend/src/utils/logger.ts
create_file backend/src/jobs/scheduler.ts
create_file backend/src/config/db.ts
create_file backend/src/config/env.ts

create_file backend/.env
create_package_json backend "@dv/backend"
create_tsconfig backend

# Bubble Plugin
create_dir bubble
create_file bubble/bubble-actions.ts
create_file bubble/bubble-init.ts
create_file bubble/bubble-update.ts
create_file bubble/plugin-metadata.json
create_file bubble/plugin.ts
create_file bubble/styles.css

# Bubble Plugin Final
create_dir bubble-plugin-final
create_file bubble-plugin-final/bubble-init.ts
create_file bubble-plugin-final/datavisualizerpro.ts
create_file bubble-plugin-final/element.json
create_file bubble-plugin-final/plugin.json

# Config Webpack
create_dir config
create_file config/webpack.bubble.ts
create_file config/webpack.common.ts
create_file config/webpack.dev.ts
create_file config/webpack.prod.ts

# Scripts
create_dir scripts
create_file scripts/build.ts
create_file scripts/deploy.ts
create_file scripts/test.ts
create_file scripts/generate-chart.ts
create_file scripts/generate-docs.ts

# Docs
create_dir docs
create_file docs/architecture.md
create_file docs/getting-started.md
create_dir docs/usage-examples
create_dir docs/contributing.md
create_dir docs/api-reference

# Infraestructura IaC
create_dir infra
create_dir infra/terraform
create_dir infra/docker-compose
create_dir infra/kubernetes

create_file infra/terraform/main.tf
create_file infra/terraform/variables.tf
create_file infra/terraform/outputs.tf
create_file infra/docker-compose/docker-compose.yml
create_file infra/kubernetes/deployment.yaml
create_file infra/kubernetes/service.yaml

# Packages: @dv/backend
create_dir packages/@dv/backend/src
create_dir packages/@dv/backend/src/controllers
create_dir packages/@dv/backend/src/services
create_dir packages/@dv/backend/src/utils
create_dir packages/@dv/backend/src/models
create_dir packages/@dv/backend/src/config

create_file packages/@dv/backend/src/server.ts
create_file packages/@dv/backend/src/controllers/analytics.controller.ts
create_file packages/@dv/backend/src/controllers/ml.controller.ts
create_file packages/@dv/backend/src/controllers/nlp.controller.ts
create_file packages/@dv/backend/src/controllers/report.controller.ts
create_file packages/@dv/backend/src/services/analyticsService.ts
create_file packages/@dv/backend/src/services/mlService.ts
create_file packages/@dv/backend/src/services/nlpService.ts
create_file packages/@dv/backend/src/services/reportService.ts
create_file packages/@dv/backend/src/utils/logger.ts
create_file packages/@dv/backend/src/models/anomaly.model.ts
create_file packages/@dv/backend/src/models/clustering.model.ts
create_file packages/@dv/backend/src/models/forecasting.model.ts
create_file packages/@dv/backend/src/config/db.ts
create_file packages/@dv/backend/src/config/env.ts

create_package_json packages/@dv/backend "@dv/backend"
create_tsconfig packages/@dv/backend

# Packages: @dv/charts-engine
create_dir packages/@dv/charts-engine/src
create_dir packages/@dv/charts-engine/src/renderers
create_dir packages/@dv/charts-engine/src/transformers
create_dir packages/@dv/charts-engine/src/themes
create_dir packages/@dv/charts-engine/__tests__

create_file packages/@dv/charts-engine/src/chartFactory.ts
create_file packages/@dv/charts-engine/src/universalChart.ts
create_file packages/@dv/charts-engine/src/registry.json
create_file packages/@dv/charts-engine/src/index.ts
create_file packages/@dv/charts-engine/__tests__/chartTestRunner.ts

create_package_json packages/@dv/charts-engine "@dv/charts-engine"
create_tsconfig packages/@dv/charts-engine

# Packages: @dv/bubble-plugin
create_dir packages/@dv/bubble-plugin/src
create_dir packages/@dv/bubble-plugin/src/admin
create_dir packages/@dv/bubble-plugin/src/components
create_dir packages/@dv/bubble-plugin/src/core
create_dir packages/@dv/bubble-plugin/src/viewers

create_file packages/@dv/bubble-plugin/src/bubbleEntryPoint.ts
create_file packages/@dv/bubble-plugin/src/admin/chartConfigurator.ts
create_file packages/@dv/bubble-plugin/src/components/chartSelector.ts
create_file packages/@dv/bubble-plugin/src/components/dataFieldMapper.ts
create_file packages/@dv/bubble-plugin/src/components/dataSourceSelector.ts
create_file packages/@dv/bubble-plugin/src/components/filterBuilder.ts
create_file packages/@dv/bubble-plugin/src/components/themePicker.ts
create_file packages/@dv/bubble-plugin/src/core/eventBus.ts
create_file packages/@dv/bubble-plugin/src/viewers/dashboardContainer.ts

create_package_json packages/@dv/bubble-plugin "@dv/bubble-plugin"
create_tsconfig packages/@dv/bubble-plugin

# Packages: @dv/ml-pipelines
create_dir packages/@dv/ml-pipelines/src
create_dir packages/@dv/ml-pipelines/src/cloudSync
create_dir packages/@dv/ml-pipelines/src/core
create_dir packages/@dv/ml-pipelines/src/models
create_dir packages/@dv/ml-pipelines/src/models/anomaly
create_dir packages/@dv/ml-pipelines/src/models/classification
create_dir packages/@dv/ml-pipelines/src/models/clustering
create_dir packages/@dv/ml-pipelines/src/models/forecasting
create_dir packages/@dv/ml-pipelines/src/models/visualization
create_dir packages/@dv/ml-pipelines/__tests__

create_file packages/@dv/ml-pipelines/src/cloudSync/cloudTraining.ts
create_file packages/@dv/ml-pipelines/src/cloudSync/modelDeployer.ts
create_file packages/@dv/ml-pipelines/src/cloudSync/modelSynchronizer.ts
create_file packages/@dv/ml-pipelines/src/core/dataPreprocessor.ts
create_file packages/@dv/ml-pipelines/src/core/modelEvaluator.ts
create_file packages/@dv/ml-pipelines/src/core/modelRegistry.ts
create_file packages/@dv/ml-pipelines/src/core/modelTrainer.ts
create_file packages/@dv/ml-pipelines/src/core/tensorflowBridge.ts
create_file packages/@dv/ml-pipelines/src/models/anomaly/anomalyEngine.ts
create_file packages/@dv/ml-pipelines/src/models/anomaly/outlierDetector.ts
create_file packages/@dv/ml-pipelines/src/models/classification/abandonmentPredictor.ts
create_file packages/@dv/ml-pipelines/src/models/classification/binaryClassifier.ts
create_file packages/@dv/ml-pipelines/src/models/clustering/customerSegmentation.ts
create_file packages/@dv/ml-pipelines/src/models/clustering/kmeansEngine.ts
create_file packages/@dv/ml-pipelines/src/models/forecasting/salesForecastModel.ts
create_file packages/@dv/ml-pipelines/src/models/forecasting/timeSeriesModel.ts
create_file packages/@dv/ml-pipelines/src/models/visualization/clusterVisualizer.ts
create_file packages/@dv/ml-pipelines/src/models/visualization/outlierVisualizer.ts
create_file packages/@dv/ml-pipelines/src/models/visualization/predictionVisualizer.ts
create_file packages/@dv/ml-pipelines/__tests__/mlTestRunner.ts

create_package_json packages/@dv/ml-pipelines "@dv/ml-pipelines"
create_tsconfig packages/@dv/ml-pipelines

# Packages: @dv/shared
create_dir packages/@dv/shared/utils
create_dir packages/@dv/shared/types

create_file packages/@dv/shared/utils/logger.ts
create_file packages/@dv/shared/utils/formatter.ts
create_file packages/@dv/shared/types/chart-types.ts
create_file packages/@dv/shared/types/ml-types.ts

create_package_json packages/@dv/shared "@dv/shared"
create_tsconfig packages/@dv/shared

# Src (Frontend)
create_dir src/admin
create_dir src/admin/components
create_dir src/ai
create_dir src/ai/chat
create_dir src/ai/core
create_dir src/ai/insights
create_dir src/ai/nlp
create_dir src/ai/workflows
create_dir src/analytics
create_dir src/bubble
create_dir src/core
create_dir src/datasources
create_dir src/datasources/api
create_dir src/datasources/bubble
create_dir src/datasources/nosql
create_dir src/datasources/sql
create_dir src/integrations
create_dir src/ml
create_dir src/ml/cloudSync
create_dir src/ml/core
create_dir src/ml/models
create_dir src/native
create_dir src/native/ai-enhanced
create_dir src/native/enterprise
create_dir src/plugins
create_dir src/viewers
create_dir src/viewers/common
create_dir src/viewers/dashboard
create_dir src/viewers/interactions
create_dir src/viewers/renderers
create_dir src/viewers/renderers/echarts
create_dir src/viewers/renderers/plotly
create_dir src/wrappers
create_dir src/wrappers/plotly
create_dir src/wrappers/echarts

# Archivos clave en src
create_file src/admin/chartConfigurator.ts
create_file src/admin/connectionManager.ts
create_file src/admin/dashboardDesigner.ts
create_file src/admin/templateManager.ts

create_file src/ai/chat/chatEngine.ts
create_file src/ai/chat/dashboardContext.ts
create_file src/ai/chat/queryProcessor.ts
create_file src/ai/chat/responseFormatter.ts
create_file src/ai/core/contextManager.ts
create_file src/ai/core/insightEngine.ts
create_file src/ai/core/llmConnector.ts
create_file src/ai/core/promptBuilder.ts
create_file src/ai/insights/actionSuggester.ts
create_file src/ai/insights/alertManager.ts
create_file src/ai/insights/outlierExplainer.ts
create_file src/ai/insights/trendInsights.ts
create_file src/ai/nlp/sentimentAnalyzer.ts
create_file src/ai/nlp/textPreprocessor.ts
create_file src/ai/nlp/narrativeGenerator.ts
create_file src/ai/workflows/bubbleConnector.ts
create_file src/ai/workflows/notificationEngine.ts
create_file src/ai/workflows/triggerManager.ts
create_file src/ai/workflows/workflowExecutor.ts

create_file src/analytics/anomalyDetector.ts
create_file src/analytics/comparativeAnalyzer.ts
create_file src/analytics/statisticsEngine.ts
create_file src/analytics/trendAnalyzer.ts
create_file src/analytics/scenarioAnalyzer.ts

create_file src/bubble/bubbleEntryPoint.ts
create_file src/bubble/initialize.ts

create_file src/core/chartFactory.ts
create_file src/core/colorScales.ts
create_file src/core/configManager.ts
create_file src/core/dataManager.ts
create_file src/core/dataTransformer.ts
create_file src/core/eventBus.ts
create_file src/core/utils.ts

create_file src/datasources/api/apiConnector.ts
create_file src/datasources/api/graphqlAdapter.ts
create_file src/datasources/api/restApiAdapter.ts
create_file src/datasources/api/services/googleAnalytics.ts
create_file src/datasources/api/services/shopify.ts
create_file src/datasources/api/services/stripe.ts
create_file src/datasources/bubble/bubbleDataConnector.ts
create_file src/datasources/bubble/bubbleQueryBuilder.ts
create_file src/datasources/nosql/documentQueryBuilder.ts
create_file src/datasources/nosql/mongoConnector.ts
create_file src/datasources/sql/mysqlAdapter.ts
create_file src/datasources/sql/postgresAdapter.ts
create_file src/datasources/sql/sqlConnector.ts
create_file src/datasources/sql/sqlQueryBuilder.ts
create_file src/datasources/sourceInterface.ts

create_file src/integrations/apiClient.ts
create_file src/integrations/integrationManager.ts
create_file src/integrations/webhookManager.ts

create_file src/ml/cloudSync/cloudTraining.ts
create_file src/ml/cloudSync/modelDeployer.ts
create_file src/ml/cloudSync/modelSynchronizer.ts
create_file src/ml/core/dataPreprocessor.ts
create_file src/ml/core/modelEvaluator.ts
create_file src/ml/core/modelRegistry.ts
create_file src/ml/core/modelTrainer.ts
create_file src/ml/core/tensorflowBridge.ts
create_file src/ml/models/anomaly/anomalyEngine.ts
create_file src/ml/models/anomaly/outlierDetector.ts
create_file src/ml/models/classification/abandonmentPredictor.ts
create_file src/ml/models/classification/binaryClassifier.ts
create_file src/ml/models/clustering/customerSegmentation.ts
create_file src/ml/models/clustering/kmeansEngine.ts
create_file src/ml/models/forecasting/salesForecastModel.ts
create_file src/ml/models/forecasting/timeSeriesModel.ts
create_file src/ml/models/visualization/clusterVisualizer.ts
create_file src/ml/models/visualization/outlierVisualizer.ts
create_file src/ml/models/visualization/predictionVisualizer.ts

create_file src/native/ai-enhanced/conversationalCharts.ts
create_file src/native/ai-enhanced/predictiveTimeseries.ts
create_file src/native/ai-enhanced/autoPatternDetection.ts
create_file src/native/enterprise/gantt.ts
create_file src/native/enterprise/funnel.ts
create_file src/native/enterprise/dashboardAnalytics.ts

create_file src/plugins/ai-anomaly/index.ts
create_file src/plugins/ai-anomaly/worker.ts
create_file src/plugins/ai-anomaly/model.ts
create_file src/plugins/predictive-timeseries/index.ts
create_file src/plugins/predictive-timeseries/model.ts

create_file src/viewers/common/exportManager.ts
create_file src/viewers/common/imageManager.ts
create_file src/viewers/common/stateUI.ts
create_file src/viewers/common/themeManager.ts
create_file src/viewers/dashboard/dashboardContainer.ts
create_file src/viewers/interactions/eventHandler.ts
create_file src/viewers/interactions/filterManager.ts
create_file src/viewers/interactions/tooltipManager.ts
create_file src/viewers/interactions/zoomManager.ts
create_file src/viewers/renderers/canvasRenderer.ts
create_file src/viewers/renderers/d3Renderer.ts
create_file src/viewers/renderers/echarts/echartsRenderer.ts
create_file src/viewers/renderers/echarts/options.ts
create_file src/viewers/renderers/echarts/themes/corporateTheme.ts
create_file src/viewers/renderers/echarts/themes/darkTheme.ts
create_file src/viewers/renderers/echarts/themes/defaultTheme.ts
create_file src/viewers/renderers/echarts/themes/themes.ts
create_file src/viewers/renderers/echarts/transformers/barTransformer.ts
create_file src/viewers/renderers/echarts/transformers/contourTransformer.ts
create_file src/viewers/renderers/echarts/transformers/dataTransformer.ts
create_file src/viewers/renderers/echarts/transformers/heatmapTransformer.ts
create_file src/viewers/renderers/echarts/transformers/lineTransformer.ts
create_file src/viewers/renderers/echarts/transformers/pieTransformer.ts
create_file src/viewers/renderers/echarts/transformers/radarTransformer.ts
create_file src/viewers/renderers/echarts/transformers/sankeyTransformer.ts
create_file src/viewers/renderers/echarts/transformers/scatterTransformer.ts
create_file src/viewers/renderers/echarts/utils.ts
create_file src/viewers/renderers/plotly/debugRenderer.ts
create_file src/viewers/renderers/plotly/enhancedPlotlyRenderer.ts
create_file src/viewers/renderers/plotly/options.ts
create_file src/viewers/renderers/plotly/plotlyRenderer.ts
create_file src/viewers/renderers/plotly/rendererInterface.ts
create_file src/viewers/renderers/plotly/utils.ts
create_file src/viewers/renderers/plotly/transformers/lineTransformer.ts
create_file src/viewers/renderers/plotly/transformers/ohlcTransformer.ts
create_file src/viewers/renderers/plotly/transformers/pieTransformer.ts
create_file src/viewers/renderers/plotly/transformers/scatterTransformer.ts

# Wrappers
create_dir src/wrappers/plotly
create_dir src/wrappers/echarts

# Inicialización
create_file src/initialize.ts
create_file src/update.ts

# Pnpm workspace file
cat <<EOL > pnpm-workspace.yaml
packages:
  - 'packages/*@dv/*'
EOL

# Configuración base TypeScript
cat <<EOL > tsconfig.base.json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"]
}
EOL

# Webpack Configuration
cat <<EOL > webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    'wrapper-plotly': './src/wrappers/plotly/index.ts',
    'wrapper-echarts': './src/wrappers/echarts/index.ts',
    'native-ai': './src/native/ai-enhanced/index.ts',
    'bubble-main': './src/bubble/main.ts'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        plotlyVendor: {
          test: /plotly/,
          name: 'plotly-lib',
          priority: 10
        },
        echartsVendor: {
          test: /echarts/,
          name: 'echarts-lib',
          priority: 10
        },
        mlVendor: {
          test: /tensorflow|tfjs/,
          name: 'ml-tensorflow',
          priority: 5
        }
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
EOL

# Package.json principal
cat <<EOL > package.json
{
  "name": "data-visualizer-pro",
  "version": "1.0.0",
  "private": true,
  "workspaces": {
    "packages": [
      "packages/*@dv/*"
    ]
  },
  "scripts": {
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "deploy": "pnpm deploy:bubble && pnpm deploy:backend",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "generate:chart": "ts-node ./scripts/generate-chart.ts"
  },
  "dependencies": {
    "@tensorflow/tfjs": "^4.14.0",
    "plotly.js-dist": "^2.23.0",
    "echarts": "^5.4.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "eslint": "^8.50.0",
    "prettier": "^3.2.4",
    "husky": "^8.0.3",
    "lint-staged": "^13.0.2",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.8"
  }
}
EOL

# README inicial
cat <<EOL > README.md
# Data Visualizer Pro v3.2

Plugin visual todo-en-uno para Bubble.io con más de 200 gráficos, soporte para Machine Learning, análisis predictivo e integraciones empresariales.

## Estructura del Proyecto

- `backend/` - Servidor Node.js
- `bubble/` - Plugin para Bubble.io
- `src/` - Código fuente frontend
- `docs/` - Documentación técnica
- `infra/` - Infraestructura como código
- `packages/` - Paquetes modulares

## Instalación

```bash
npm install -g pnpm
cd data-visualizer-pro-v3.2
pnpm install