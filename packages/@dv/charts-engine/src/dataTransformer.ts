/**
 * Transformador de datos para charts
 */

export interface DataPoint {
  x: string | number;
  y: number;
  label?: string;
}

export interface ChartData {
  title: string;
  data: DataPoint[];
  type: 'line' | 'bar' | 'pie' | 'scatter';
}

export class DataTransformer {
  /**
   * Convierte datos en bruto a formato de chart
   */
  static transformToChart(rawData: any[], options: {
    xField: string;
    yField: string;
    chartType: ChartData['type'];
    title?: string;
  }): ChartData {
    const data: DataPoint[] = rawData.map(item => ({
      x: item[options.xField],
      y: Number(item[options.yField]) || 0,
      label: item.label || item.name
    }));

    return {
      title: options.title || 'Chart',
      data,
      type: options.chartType
    };
  }

  /**
   * Filtra datos por rango de valores
   */
  static filterByRange(data: DataPoint[], min: number, max: number): DataPoint[] {
    return data.filter(point => 
      typeof point.y === 'number' && point.y >= min && point.y <= max
    );
  }

  /**
   * Agrupa datos por categoría
   */
  static groupByCategory(data: DataPoint[]): Record<string, DataPoint[]> {
    return data.reduce((groups, point) => {
      const category = String(point.x);
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(point);
      return groups;
    }, {} as Record<string, DataPoint[]>);
  }

  /**
   * Calcula totales por categoría
   */
  static sumByCategory(data: DataPoint[]): DataPoint[] {
    const groups = this.groupByCategory(data);
    
    return Object.entries(groups).map(([category, points]) => ({
      x: category,
      y: points.reduce((sum, point) => sum + point.y, 0),
      label: category
    }));
  }
}
