/**
 * Configurador de charts para Bubble
 */

export interface BubbleChartConfig {
  chartType: 'line' | 'bar' | 'pie' | 'scatter';
  title: string;
  width: number;
  height: number;
  dataSource: string;
  xField: string;
  yField: string;
  colorScheme: 'default' | 'blue' | 'green' | 'red' | 'purple';
  showLegend: boolean;
  showGrid: boolean;
  animate: boolean;
}

export class ChartConfigurator {
  private config: Partial<BubbleChartConfig> = {};

  /**
   * Establece la configuración del chart
   */
  setConfig(config: Partial<BubbleChartConfig>): ChartConfigurator {
    this.config = { ...this.config, ...config };
    return this;
  }

  /**
   * Obtiene la configuración actual
   */
  getConfig(): Partial<BubbleChartConfig> {
    return { ...this.config };
  }

  /**
   * Valida la configuración
   */
  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.config.chartType) {
      errors.push('Chart type is required');
    }

    if (!this.config.dataSource) {
      errors.push('Data source is required');
    }

    if (!this.config.xField) {
      errors.push('X field is required');
    }

    if (!this.config.yField) {
      errors.push('Y field is required');
    }

    if (this.config.width && this.config.width < 100) {
      errors.push('Width must be at least 100px');
    }

    if (this.config.height && this.config.height < 100) {
      errors.push('Height must be at least 100px');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Genera configuración por defecto
   */
  static getDefaultConfig(): BubbleChartConfig {
    return {
      chartType: 'bar',
      title: 'My Chart',
      width: 400,
      height: 300,
      dataSource: '',
      xField: '',
      yField: '',
      colorScheme: 'default',
      showLegend: true,
      showGrid: true,
      animate: true
    };
  }

  /**
   * Resetea la configuración a valores por defecto
   */
  reset(): ChartConfigurator {
    this.config = ChartConfigurator.getDefaultConfig();
    return this;
  }

  /**
   * Genera HTML para preview del chart
   */
  generatePreviewHtml(): string {
    const { chartType = 'bar', title = 'Chart', width = 400, height = 300 } = this.config;
    
    return `<div class="chart-preview" style="width: ${width}px; height: ${height}px;">
      <h3>${title}</h3>
      <div class="chart-placeholder">
        ${chartType.toUpperCase()} Chart Preview
      </div>
    </div>`;
  }
}