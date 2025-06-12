import { MathUtils } from '../utils/mathUtils';

describe('MathUtils', () => {
  describe('average', () => {
    it('should calculate average of numbers', () => {
      expect(MathUtils.average([1, 2, 3, 4, 5])).toBe(3);
      expect(MathUtils.average([10, 20, 30])).toBe(20);
    });

    it('should return 0 for empty array', () => {
      expect(MathUtils.average([])).toBe(0);
    });

    it('should handle single number', () => {
      expect(MathUtils.average([42])).toBe(42);
    });

    it('should handle negative numbers', () => {
      expect(MathUtils.average([-1, -2, -3])).toBe(-2);
    });
  });

  describe('minMax', () => {
    it('should find min and max values', () => {
      const result = MathUtils.minMax([3, 1, 4, 1, 5, 9, 2, 6]);
      expect(result.min).toBe(1);
      expect(result.max).toBe(9);
    });

    it('should handle empty array', () => {
      const result = MathUtils.minMax([]);
      expect(result.min).toBe(0);
      expect(result.max).toBe(0);
    });

    it('should handle single number', () => {
      const result = MathUtils.minMax([42]);
      expect(result.min).toBe(42);
      expect(result.max).toBe(42);
    });

    it('should handle negative numbers', () => {
      const result = MathUtils.minMax([-5, -10, -2]);
      expect(result.min).toBe(-10);
      expect(result.max).toBe(-2);
    });
  });

  describe('normalize', () => {
    it('should normalize values to 0-1 range', () => {
      const result = MathUtils.normalize([1, 2, 3, 4, 5]);
      expect(result).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

    it('should handle identical values', () => {
      const result = MathUtils.normalize([5, 5, 5]);
      expect(result).toEqual([0, 0, 0]);
    });

    it('should handle empty array', () => {
      const result = MathUtils.normalize([]);
      expect(result).toEqual([]);
    });

    it('should handle single value', () => {
      const result = MathUtils.normalize([42]);
      expect(result).toEqual([0]);
    });
  });

  describe('standardDeviation', () => {
    it('should calculate standard deviation', () => {
      const result = MathUtils.standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]);
      expect(result).toBeCloseTo(2, 0);
    });

    it('should return 0 for empty array', () => {
      expect(MathUtils.standardDeviation([])).toBe(0);
    });

    it('should return 0 for identical values', () => {
      expect(MathUtils.standardDeviation([5, 5, 5, 5])).toBe(0);
    });

    it('should handle single value', () => {
      expect(MathUtils.standardDeviation([42])).toBe(0);
    });
  });
});