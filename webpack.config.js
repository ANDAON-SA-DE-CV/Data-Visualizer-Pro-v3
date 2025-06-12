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
