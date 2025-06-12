import { DataPreprocessor, MLDataset } from '../src/core/dataPreprocessor';

describe('DataPreprocessor', () => {
  describe('normalizeFeatures', () => {
    it('should normalize features to 0-1 range', () => {
      const features = [
        [1, 10, 100],
        [2, 20, 200],
        [3, 30, 300],
        [4, 40, 400]
      ];

      const result = DataPreprocessor.normalizeFeatures(features);
      
      expect(result).toHaveLength(4);
      expect(result[0]).toEqual([0, 0, 0]);
      expect(result[3]).toEqual([1, 1, 1]);
      expect(result[1][0]).toBeCloseTo(0.333, 2);
      expect(result[2][1]).toBeCloseTo(0.667, 2);
    });

    it('should handle features with same values', () => {
      const features = [
        [5, 5, 5],
        [5, 5, 5],
        [5, 5, 5]
      ];

      const result = DataPreprocessor.normalizeFeatures(features);
      
      expect(result).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]);
    });

    it('should handle empty features array', () => {
      const result = DataPreprocessor.normalizeFeatures([]);
      expect(result).toEqual([]);
    });

    it('should handle single feature row', () => {
      const features = [[1, 2, 3]];
      const result = DataPreprocessor.normalizeFeatures(features);
      expect(result).toEqual([[0, 0, 0]]);
    });

    it('should handle negative values', () => {
      const features = [
        [-10, -20],
        [0, 0],
        [10, 20]
      ];

      const result = DataPreprocessor.normalizeFeatures(features);
      
      expect(result[0]).toEqual([0, 0]);
      expect(result[1]).toEqual([0.5, 0.5]);
      expect(result[2]).toEqual([1, 1]);
    });
  });

  describe('trainTestSplit', () => {
    const sampleDataset: MLDataset = {
      features: [
        [1, 2], [3, 4], [5, 6], [7, 8], [9, 10],
        [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]
      ],
      labels: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      featureNames: ['feature1', 'feature2']
    };

    it('should split dataset with default test size (20%)', () => {
      const result = DataPreprocessor.trainTestSplit(sampleDataset);
      
      expect(result.train.features.length).toBe(8);
      expect(result.test.features.length).toBe(2);
      expect(result.train.labels.length).toBe(8);
      expect(result.test.labels.length).toBe(2);
      expect(result.train.featureNames).toEqual(['feature1', 'feature2']);
      expect(result.test.featureNames).toEqual(['feature1', 'feature2']);
    });

    it('should split dataset with custom test size', () => {
      const result = DataPreprocessor.trainTestSplit(sampleDataset, 0.3);
      
      expect(result.train.features.length).toBe(7);
      expect(result.test.features.length).toBe(3);
    });

    it('should split dataset with 50% test size', () => {
      const result = DataPreprocessor.trainTestSplit(sampleDataset, 0.5);
      
      expect(result.train.features.length).toBe(5);
      expect(result.test.features.length).toBe(5);
    });

    it('should handle small datasets', () => {
      const smallDataset: MLDataset = {
        features: [[1, 2], [3, 4]],
        labels: [0, 1],
        featureNames: ['f1', 'f2']
      };

      const result = DataPreprocessor.trainTestSplit(smallDataset, 0.5);
      
      expect(result.train.features.length).toBe(1);
      expect(result.test.features.length).toBe(1);
    });

    it('should preserve feature-label correspondence', () => {
      const result = DataPreprocessor.trainTestSplit(sampleDataset);
      
      // Verificar que cada feature corresponde a su label
      result.train.features.forEach((feature, idx) => {
        const originalIdx = sampleDataset.features.findIndex(f => 
          f[0] === feature[0] && f[1] === feature[1]
        );
        expect(result.train.labels[idx]).toBe(sampleDataset.labels[originalIdx]);
      });
    });
  });

  describe('removeOutliers', () => {
    it('should remove outliers using IQR method', () => {
      const dataset: MLDataset = {
        features: [
          [1, 10],    // normal
          [2, 12],    // normal
          [3, 11],    // normal
          [4, 13],    // normal
          [5, 12],    // normal
          [100, 10],  // outlier in first feature
          [2, 100]    // outlier in second feature
        ],
        labels: [0, 0, 1, 1, 0, 1, 0],
        featureNames: ['feature1', 'feature2']
      };

      const result = DataPreprocessor.removeOutliers(dataset);
      
      // Debería mantener solo los valores normales (primeros 5)
      expect(result.features.length).toBeLessThan(dataset.features.length);
      expect(result.labels.length).toBe(result.features.length);
      expect(result.featureNames).toEqual(dataset.featureNames);
      
      // Verificar que no hay valores extremos
      result.features.forEach(feature => {
        expect(feature[0]).toBeLessThan(50);
        expect(feature[1]).toBeLessThan(50);
      });
    });

    it('should handle dataset with no outliers', () => {
      const dataset: MLDataset = {
        features: [
          [1, 10],
          [2, 12],
          [3, 11],
          [4, 13],
          [5, 12]
        ],
        labels: [0, 0, 1, 1, 0],
        featureNames: ['feature1', 'feature2']
      };

      const result = DataPreprocessor.removeOutliers(dataset);
      
      // No deberían eliminarse muestras
      expect(result.features.length).toBe(dataset.features.length);
      expect(result.labels.length).toBe(dataset.labels.length);
    });

    it('should handle empty dataset', () => {
      const dataset: MLDataset = {
        features: [],
        labels: [],
        featureNames: ['feature1', 'feature2']
      };

      const result = DataPreprocessor.removeOutliers(dataset);
      
      expect(result.features).toEqual([]);
      expect(result.labels).toEqual([]);
      expect(result.featureNames).toEqual(['feature1', 'feature2']);
    });

    it('should handle dataset with single sample', () => {
      const dataset: MLDataset = {
        features: [[1, 2]],
        labels: [0],
        featureNames: ['feature1', 'feature2']
      };

      const result = DataPreprocessor.removeOutliers(dataset);
      
      expect(result.features).toEqual([[1, 2]]);
      expect(result.labels).toEqual([0]);
    });

    it('should handle uniform data (all same values)', () => {
      const dataset: MLDataset = {
        features: [
          [5, 5],
          [5, 5],
          [5, 5],
          [5, 5]
        ],
        labels: [0, 1, 0, 1],
        featureNames: ['feature1', 'feature2']
      };

      const result = DataPreprocessor.removeOutliers(dataset);
      
      // Con valores idénticos, no hay outliers
      expect(result.features.length).toBe(4);
      expect(result.labels.length).toBe(4);
    });
  });
});