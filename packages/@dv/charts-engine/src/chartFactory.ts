import { ChartData, DataTransformer } from './dataTransformer';

/**
 * Factory para crear diferentes tipos de charts
 */
export class ChartFactory {
  private static supportedTypes: ChartData['type'][] = ['line', 'bar', 'pie', 'scatter'];

  /**
   * Crea un chart con los datos proporcionados
   */
  static createChart(rawData: any[], options: {
    xField: string;
    yField: string;
    chartType: ChartData['type'];
    title?: string;
  }): ChartData {
    if (!this.isValidType(options.chartType)) {
      throw new Error(`Unsupported chart type: ${options.chartType}`);
    }

    if (!rawData || rawData.length === 0) {
      throw new Error('Data cannot be empty');
    }

    return DataTransformer.transformToChart(rawData, options);
  }  /**
   * Verifica si el tipo de chart es soportado
   */
  static isValidType(type: string): type is ChartData['type'] {
    return this.supportedTypes.indexOf(type as ChartData['type']) !== -1;
  }

  /**
   * Obtiene los tipos de chart soportados
   */
  static getSupportedTypes(): ChartData['type'][] {
    return [...this.supportedTypes];
  }

  /**
   * Crea múltiples charts a partir de diferentes configuraciones
   */
  static createMultipleCharts(rawData: any[], configurations: Array<{
    xField: string;
    yField: string;
    chartType: ChartData['type'];
    title?: string;
  }>): ChartData[] {
    return configurations.map(config => this.createChart(rawData, config));
  }
}