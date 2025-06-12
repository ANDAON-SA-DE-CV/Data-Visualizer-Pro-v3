import { ChartConfigurator, BubbleChartConfig } from '../src/admin/chartConfigurator';

describe('ChartConfigurator', () => {
  let configurator: ChartConfigurator;

  beforeEach(() => {
    configurator = new ChartConfigurator();
  });

  describe('setConfig and getConfig', () => {
    it('should set and get configuration', () => {
      const config: Partial<BubbleChartConfig> = {
        chartType: 'line',
        title: 'Sales Chart',
        width: 500,
        height: 400
      };

      configurator.setConfig(config);
      const result = configurator.getConfig();

      expect(result).toEqual(config);
    });

    it('should merge configurations', () => {
      configurator.setConfig({ chartType: 'bar', title: 'First' });
      configurator.setConfig({ title: 'Updated', width: 600 });

      const result = configurator.getConfig();

      expect(result.chartType).toBe('bar');
      expect(result.title).toBe('Updated');
      expect(result.width).toBe(600);
    });

    it('should return a copy of the configuration', () => {
      const config = { chartType: 'pie' as const };
      configurator.setConfig(config);
      
      const result = configurator.getConfig();
      result.title = 'Modified';

      expect(configurator.getConfig().title).toBeUndefined();
    });

    it('should allow method chaining', () => {
      const result = configurator
        .setConfig({ chartType: 'line' })
        .setConfig({ title: 'Chained' });

      expect(result).toBe(configurator);
      expect(configurator.getConfig().chartType).toBe('line');
      expect(configurator.getConfig().title).toBe('Chained');
    });
  });

  describe('validate', () => {
    it('should pass validation with complete configuration', () => {
      configurator.setConfig({
        chartType: 'bar',
        dataSource: 'users',
        xField: 'name',
        yField: 'count',
        width: 400,
        height: 300
      });

      const result = configurator.validate();

      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it('should fail validation for missing required fields', () => {
      const result = configurator.validate();

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Chart type is required');
      expect(result.errors).toContain('Data source is required');
      expect(result.errors).toContain('X field is required');
      expect(result.errors).toContain('Y field is required');
    });

    it('should validate minimum dimensions', () => {
      configurator.setConfig({
        chartType: 'bar',
        dataSource: 'users',
        xField: 'name',
        yField: 'count',
        width: 50,
        height: 50
      });

      const result = configurator.validate();

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Width must be at least 100px');
      expect(result.errors).toContain('Height must be at least 100px');
    });

    it('should allow dimensions to be undefined', () => {
      configurator.setConfig({
        chartType: 'bar',
        dataSource: 'users',
        xField: 'name',
        yField: 'count'
      });

      const result = configurator.validate();

      expect(result.isValid).toBe(true);
    });
  });

  describe('getDefaultConfig', () => {
    it('should return complete default configuration', () => {
      const defaultConfig = ChartConfigurator.getDefaultConfig();

      expect(defaultConfig).toEqual({
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
      });
    });

    it('should return a new object each time', () => {
      const default1 = ChartConfigurator.getDefaultConfig();
      const default2 = ChartConfigurator.getDefaultConfig();

      expect(default1).not.toBe(default2);
      expect(default1).toEqual(default2);
    });
  });

  describe('reset', () => {
    it('should reset configuration to defaults', () => {
      configurator.setConfig({
        chartType: 'line',
        title: 'Custom Chart',
        width: 800
      });

      configurator.reset();
      const result = configurator.getConfig();

      expect(result).toEqual(ChartConfigurator.getDefaultConfig());
    });

    it('should allow method chaining', () => {
      const result = configurator
        .setConfig({ chartType: 'pie' })
        .reset();

      expect(result).toBe(configurator);
    });
  });

  describe('generatePreviewHtml', () => {
    it('should generate HTML with default values', () => {
      const html = configurator.generatePreviewHtml();

      expect(html).toContain('width: 400px');
      expect(html).toContain('height: 300px');
      expect(html).toContain('<h3>Chart</h3>');
      expect(html).toContain('BAR Chart Preview');
    });

    it('should generate HTML with custom configuration', () => {
      configurator.setConfig({
        chartType: 'line',
        title: 'Sales Report',
        width: 600,
        height: 400
      });

      const html = configurator.generatePreviewHtml();

      expect(html).toContain('width: 600px');
      expect(html).toContain('height: 400px');
      expect(html).toContain('<h3>Sales Report</h3>');
      expect(html).toContain('LINE Chart Preview');
    });

    it('should handle missing configuration gracefully', () => {
      configurator.setConfig({ chartType: 'pie' });

      const html = configurator.generatePreviewHtml();

      expect(html).toContain('PIE Chart Preview');
      expect(html).toContain('width: 400px'); // default
      expect(html).toContain('height: 300px'); // default
    });    it('should generate valid HTML structure', () => {
      const html = configurator.generatePreviewHtml();

      expect(html).toMatch(/<div class="chart-preview".*>/);
      expect(html).toMatch(/<h3>.*<\/h3>/);
      expect(html).toMatch(/<div class="chart-placeholder">[\s\S]*<\/div>/);
      expect(html).toMatch(/<\/div>$/);
    });
  });
});
