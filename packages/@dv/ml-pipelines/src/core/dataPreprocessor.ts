/**
 * Preprocesador de datos para ML
 */

export interface MLDataset {
  features: number[][];
  labels: number[];
  featureNames: string[];
}

export class DataPreprocessor {
  /**
   * Normaliza features a escala 0-1
   */
  static normalizeFeatures(features: number[][]): number[][] {
    if (features.length === 0) return [];
    
    const numFeatures = features[0].length;
    const mins = new Array(numFeatures).fill(Infinity);
    const maxs = new Array(numFeatures).fill(-Infinity);
    
    // Encontrar min y max por feature
    features.forEach(row => {
      row.forEach((value, idx) => {
        mins[idx] = Math.min(mins[idx], value);
        maxs[idx] = Math.max(maxs[idx], value);
      });
    });
    
    // Normalizar
    return features.map(row => 
      row.map((value, idx) => {
        const range = maxs[idx] - mins[idx];
        return range === 0 ? 0 : (value - mins[idx]) / range;
      })
    );
  }

  /**
   * Divide dataset en entrenamiento y prueba
   */
  static trainTestSplit(
    dataset: MLDataset, 
    testSize: number = 0.2
  ): {
    train: MLDataset;
    test: MLDataset;
  } {
    const totalSamples = dataset.features.length;
    const testCount = Math.floor(totalSamples * testSize);
    const trainCount = totalSamples - testCount;
    
    // Mezclar índices aleatoriamente
    const indices = Array.from({ length: totalSamples }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    const trainIndices = indices.slice(0, trainCount);
    const testIndices = indices.slice(trainCount);
    
    return {
      train: {
        features: trainIndices.map(i => dataset.features[i]),
        labels: trainIndices.map(i => dataset.labels[i]),
        featureNames: dataset.featureNames
      },
      test: {
        features: testIndices.map(i => dataset.features[i]),
        labels: testIndices.map(i => dataset.labels[i]),
        featureNames: dataset.featureNames
      }
    };
  }

  /**
   * Elimina outliers usando IQR
   */
  static removeOutliers(dataset: MLDataset): MLDataset {
    const { features, labels, featureNames } = dataset;
    if (features.length === 0) return dataset;
    
    const validIndices: number[] = [];
    
    // Para cada muestra, verificar si alguna feature es outlier
    features.forEach((sample, idx) => {
      let isOutlier = false;
      
      for (let featureIdx = 0; featureIdx < sample.length; featureIdx++) {
        const featureValues = features.map(row => row[featureIdx]);
        const sorted = [...featureValues].sort((a, b) => a - b);
        
        const q1 = sorted[Math.floor(sorted.length * 0.25)];
        const q3 = sorted[Math.floor(sorted.length * 0.75)];
        const iqr = q3 - q1;
        const lowerBound = q1 - 1.5 * iqr;
        const upperBound = q3 + 1.5 * iqr;
        
        if (sample[featureIdx] < lowerBound || sample[featureIdx] > upperBound) {
          isOutlier = true;
          break;
        }
      }
      
      if (!isOutlier) {
        validIndices.push(idx);
      }
    });
    
    return {
      features: validIndices.map(i => features[i]),
      labels: validIndices.map(i => labels[i]),
      featureNames
    };
  }
}