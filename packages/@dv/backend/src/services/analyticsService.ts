/**
 * Servicio básico de analytics para el backend
 */

export interface AnalyticsData {
  id: string;
  timestamp: Date;
  value: number;
  category: string;
  metadata?: Record<string, any>;
}

export interface AnalyticsQuery {
  startDate?: Date;
  endDate?: Date;
  category?: string;
  limit?: number;
}

export class AnalyticsService {
  private data: AnalyticsData[] = [];

  /**
   * Añade un punto de datos de analytics
   */
  addData(data: Omit<AnalyticsData, 'id' | 'timestamp'>): AnalyticsData {
    const newData: AnalyticsData = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      ...data
    };
    
    this.data.push(newData);
    return newData;
  }

  /**
   * Consulta datos de analytics
   */
  query(query: AnalyticsQuery = {}): AnalyticsData[] {
    let filtered = [...this.data];

    if (query.startDate) {
      filtered = filtered.filter(item => item.timestamp >= query.startDate!);
    }

    if (query.endDate) {
      filtered = filtered.filter(item => item.timestamp <= query.endDate!);
    }

    if (query.category) {
      filtered = filtered.filter(item => item.category === query.category);
    }

    if (query.limit) {
      filtered = filtered.slice(0, query.limit);
    }

    return filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  /**
   * Obtiene estadísticas básicas
   */
  getStats(category?: string): {
    count: number;
    average: number;
    min: number;
    max: number;
    total: number;
  } {
    const relevantData = category 
      ? this.data.filter(item => item.category === category)
      : this.data;

    if (relevantData.length === 0) {
      return { count: 0, average: 0, min: 0, max: 0, total: 0 };
    }

    const values = relevantData.map(item => item.value);
    const total = values.reduce((sum, val) => sum + val, 0);

    return {
      count: relevantData.length,
      average: total / relevantData.length,
      min: Math.min(...values),
      max: Math.max(...values),
      total
    };
  }

  /**
   * Limpia todos los datos
   */
  clear(): void {
    this.data = [];
  }

  /**
   * Obtiene todas las categorías únicas
   */
  getCategories(): string[] {
    const categories = new Set(this.data.map(item => item.category));
    return Array.from(categories).sort();
  }
}