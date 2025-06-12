import { AnalyticsService, AnalyticsData } from '../src/services/analyticsService';

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(() => {
    service = new AnalyticsService();
  });

  describe('addData', () => {
    it('should add analytics data with generated id and timestamp', () => {
      const data = service.addData({
        value: 100,
        category: 'sales',
        metadata: { source: 'web' }
      });

      expect(data.id).toBeDefined();
      expect(data.id.length).toBeGreaterThan(0);
      expect(data.timestamp).toBeInstanceOf(Date);
      expect(data.value).toBe(100);
      expect(data.category).toBe('sales');
      expect(data.metadata).toEqual({ source: 'web' });
    });

    it('should generate unique ids for different entries', () => {
      const data1 = service.addData({ value: 100, category: 'sales' });
      const data2 = service.addData({ value: 200, category: 'marketing' });

      expect(data1.id).not.toBe(data2.id);
    });
  });

  describe('query', () => {
    beforeEach(() => {
      // Añadir datos de prueba
      service.addData({ value: 100, category: 'sales' });
      service.addData({ value: 200, category: 'marketing' });
      service.addData({ value: 150, category: 'sales' });
      service.addData({ value: 300, category: 'support' });
    });

    it('should return all data when no query provided', () => {
      const result = service.query();
      expect(result).toHaveLength(4);
    });

    it('should filter by category', () => {
      const result = service.query({ category: 'sales' });
      expect(result).toHaveLength(2);
      expect(result.every(item => item.category === 'sales')).toBe(true);
    });

    it('should apply limit', () => {
      const result = service.query({ limit: 2 });
      expect(result).toHaveLength(2);
    });

    it('should return results sorted by timestamp descending', () => {
      const result = service.query();
      
      for (let i = 1; i < result.length; i++) {
        expect(result[i - 1].timestamp.getTime()).toBeGreaterThanOrEqual(
          result[i].timestamp.getTime()
        );
      }
    });

    it('should filter by date range', () => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
      const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

      const result = service.query({
        startDate: oneHourAgo,
        endDate: oneHourFromNow
      });

      expect(result.length).toBeGreaterThan(0);
      result.forEach(item => {
        expect(item.timestamp.getTime()).toBeGreaterThanOrEqual(oneHourAgo.getTime());
        expect(item.timestamp.getTime()).toBeLessThanOrEqual(oneHourFromNow.getTime());
      });
    });

    it('should handle empty results', () => {
      const result = service.query({ category: 'nonexistent' });
      expect(result).toEqual([]);
    });
  });

  describe('getStats', () => {
    beforeEach(() => {
      service.addData({ value: 100, category: 'sales' });
      service.addData({ value: 200, category: 'sales' });
      service.addData({ value: 150, category: 'marketing' });
      service.addData({ value: 300, category: 'marketing' });
    });

    it('should calculate stats for all data when no category specified', () => {
      const stats = service.getStats();
      
      expect(stats.count).toBe(4);
      expect(stats.total).toBe(750);
      expect(stats.average).toBe(187.5);
      expect(stats.min).toBe(100);
      expect(stats.max).toBe(300);
    });

    it('should calculate stats for specific category', () => {
      const stats = service.getStats('sales');
      
      expect(stats.count).toBe(2);
      expect(stats.total).toBe(300);
      expect(stats.average).toBe(150);
      expect(stats.min).toBe(100);
      expect(stats.max).toBe(200);
    });

    it('should return zero stats for empty data', () => {
      service.clear();
      const stats = service.getStats();
      
      expect(stats.count).toBe(0);
      expect(stats.total).toBe(0);
      expect(stats.average).toBe(0);
      expect(stats.min).toBe(0);
      expect(stats.max).toBe(0);
    });

    it('should return zero stats for nonexistent category', () => {
      const stats = service.getStats('nonexistent');
      
      expect(stats.count).toBe(0);
      expect(stats.total).toBe(0);
      expect(stats.average).toBe(0);
      expect(stats.min).toBe(0);
      expect(stats.max).toBe(0);
    });
  });

  describe('getCategories', () => {
    it('should return unique sorted categories', () => {
      service.addData({ value: 100, category: 'sales' });
      service.addData({ value: 200, category: 'marketing' });
      service.addData({ value: 150, category: 'sales' });
      service.addData({ value: 300, category: 'support' });

      const categories = service.getCategories();
      
      expect(categories).toEqual(['marketing', 'sales', 'support']);
    });

    it('should return empty array for no data', () => {
      const categories = service.getCategories();
      expect(categories).toEqual([]);
    });
  });

  describe('clear', () => {
    it('should remove all data', () => {
      service.addData({ value: 100, category: 'sales' });
      service.addData({ value: 200, category: 'marketing' });
      
      expect(service.query()).toHaveLength(2);
      
      service.clear();
      
      expect(service.query()).toHaveLength(0);
      expect(service.getCategories()).toEqual([]);
    });
  });
});
