import { ChartFactory } from '../src/chartFactory';
import { DataTransformer, ChartData } from '../src/dataTransformer';

describe('ChartFactory', () => {
  const sampleData = [
    { month: 'Jan', sales: 100, category: 'A' },
    { month: 'Feb', sales: 150, category: 'B' },
    { month: 'Mar', sales: 200, category: 'A' },
    { month: 'Apr', sales: 120, category: 'B' }
  ];

  describe('createChart', () => {
    it('should create a basic line chart', () => {
      const chart = ChartFactory.createChart(sampleData, {
        xField: 'month',
        yField: 'sales',
        chartType: 'line',
        title: 'Monthly Sales'
      });

      expect(chart.title).toBe('Monthly Sales');
      expect(chart.type).toBe('line');
      expect(chart.data).toHaveLength(4);
      expect(chart.data[0]).toEqual({
        x: 'Jan',
        y: 100,
        label: undefined
      });
    });

    it('should create a bar chart', () => {
      const chart = ChartFactory.createChart(sampleData, {
        xField: 'month',
        yField: 'sales',
        chartType: 'bar'
      });

      expect(chart.type).toBe('bar');
      expect(chart.title).toBe('Chart');
    });

    it('should throw error for unsupported chart type', () => {
      expect(() => {        ChartFactory.createChart(sampleData, {
          xField: 'month',
          yField: 'sales',
          chartType: 'unsupported' as any
        });
      }).toThrow('Unsupported chart type: unsupported');
    });

    it('should throw error for empty data', () => {
      expect(() => {
        ChartFactory.createChart([], {
          xField: 'month',
          yField: 'sales',
          chartType: 'line'
        });
      }).toThrow('Data cannot be empty');
    });

    it('should throw error for null data', () => {
      expect(() => {
        ChartFactory.createChart(null as any, {
          xField: 'month',
          yField: 'sales',
          chartType: 'line'
        });
      }).toThrow('Data cannot be empty');
    });
  });

  describe('isValidType', () => {
    it('should validate supported chart types', () => {
      expect(ChartFactory.isValidType('line')).toBe(true);
      expect(ChartFactory.isValidType('bar')).toBe(true);
      expect(ChartFactory.isValidType('pie')).toBe(true);
      expect(ChartFactory.isValidType('scatter')).toBe(true);
    });

    it('should reject unsupported chart types', () => {
      expect(ChartFactory.isValidType('radar')).toBe(false);
      expect(ChartFactory.isValidType('funnel')).toBe(false);
      expect(ChartFactory.isValidType('')).toBe(false);
    });
  });

  describe('getSupportedTypes', () => {
    it('should return all supported types', () => {
      const types = ChartFactory.getSupportedTypes();
      expect(types).toEqual(['line', 'bar', 'pie', 'scatter']);
    });

    it('should return a copy of the array', () => {
      const types1 = ChartFactory.getSupportedTypes();
      const types2 = ChartFactory.getSupportedTypes();
      expect(types1).not.toBe(types2);
      expect(types1).toEqual(types2);
    });
  });

  describe('createMultipleCharts', () => {
    it('should create multiple charts from same data', () => {
      const configs = [
        { xField: 'month', yField: 'sales', chartType: 'line' as const, title: 'Line Chart' },
        { xField: 'month', yField: 'sales', chartType: 'bar' as const, title: 'Bar Chart' }
      ];

      const charts = ChartFactory.createMultipleCharts(sampleData, configs);
      
      expect(charts).toHaveLength(2);
      expect(charts[0].type).toBe('line');
      expect(charts[0].title).toBe('Line Chart');
      expect(charts[1].type).toBe('bar');
      expect(charts[1].title).toBe('Bar Chart');
    });

    it('should handle empty configurations', () => {
      const charts = ChartFactory.createMultipleCharts(sampleData, []);
      expect(charts).toEqual([]);
    });
  });
});

describe('DataTransformer', () => {
  const sampleData = [
    { month: 'Jan', sales: 100, name: 'Product A' },
    { month: 'Feb', sales: 150, name: 'Product B' },
    { month: 'Mar', sales: 200, name: 'Product A' },
    { month: 'Apr', sales: 120, name: 'Product B' }
  ];

  describe('transformToChart', () => {
    it('should transform raw data to chart format', () => {
      const result = DataTransformer.transformToChart(sampleData, {
        xField: 'month',
        yField: 'sales',
        chartType: 'line',
        title: 'Sales Data'
      });

      expect(result.title).toBe('Sales Data');
      expect(result.type).toBe('line');
      expect(result.data).toHaveLength(4);
      expect(result.data[0]).toEqual({
        x: 'Jan',
        y: 100,
        label: 'Product A'
      });
    });

    it('should handle missing numeric values', () => {
      const dataWithNulls = [
        { month: 'Jan', sales: null, name: 'Product A' },
        { month: 'Feb', sales: 'invalid', name: 'Product B' }
      ];

      const result = DataTransformer.transformToChart(dataWithNulls, {
        xField: 'month',
        yField: 'sales',
        chartType: 'line'
      });

      expect(result.data[0].y).toBe(0);
      expect(result.data[1].y).toBe(0);
    });
  });

  describe('filterByRange', () => {
    const chartData = [
      { x: 'A', y: 50, label: 'Item A' },
      { x: 'B', y: 150, label: 'Item B' },
      { x: 'C', y: 250, label: 'Item C' },
      { x: 'D', y: 75, label: 'Item D' }
    ];

    it('should filter data by value range', () => {
      const result = DataTransformer.filterByRange(chartData, 70, 200);
      expect(result).toHaveLength(2);
      expect(result[0].label).toBe('Item B');
      expect(result[1].label).toBe('Item D');
    });

    it('should return empty array for no matches', () => {
      const result = DataTransformer.filterByRange(chartData, 300, 400);
      expect(result).toEqual([]);
    });

    it('should handle inclusive bounds', () => {
      const result = DataTransformer.filterByRange(chartData, 50, 50);
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Item A');
    });
  });

  describe('groupByCategory', () => {
    const chartData = [
      { x: 'A', y: 100, label: 'Item 1' },
      { x: 'B', y: 150, label: 'Item 2' },
      { x: 'A', y: 200, label: 'Item 3' },
      { x: 'C', y: 120, label: 'Item 4' }
    ];

    it('should group data by category', () => {
      const result = DataTransformer.groupByCategory(chartData);
      
      expect(Object.keys(result)).toEqual(['A', 'B', 'C']);
      expect(result['A']).toHaveLength(2);
      expect(result['B']).toHaveLength(1);
      expect(result['C']).toHaveLength(1);
    });

    it('should handle empty data', () => {
      const result = DataTransformer.groupByCategory([]);
      expect(result).toEqual({});
    });
  });

  describe('sumByCategory', () => {
    const chartData = [
      { x: 'A', y: 100, label: 'Item 1' },
      { x: 'B', y: 150, label: 'Item 2' },
      { x: 'A', y: 200, label: 'Item 3' },
      { x: 'C', y: 120, label: 'Item 4' }
    ];

    it('should sum values by category', () => {
      const result = DataTransformer.sumByCategory(chartData);
      
      expect(result).toHaveLength(3);
      
      const categoryA = result.find(item => item.x === 'A');
      const categoryB = result.find(item => item.x === 'B');
      const categoryC = result.find(item => item.x === 'C');
      
      expect(categoryA?.y).toBe(300);
      expect(categoryB?.y).toBe(150);
      expect(categoryC?.y).toBe(120);
    });

    it('should handle empty data', () => {
      const result = DataTransformer.sumByCategory([]);
      expect(result).toEqual([]);
    });

    it('should preserve category names as labels', () => {
      const result = DataTransformer.sumByCategory(chartData);
      result.forEach(item => {
        expect(item.label).toBe(item.x);
      });
    });
  });
});