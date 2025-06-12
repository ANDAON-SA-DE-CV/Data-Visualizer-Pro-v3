/**
 * Utilidades matemáticas para el procesamiento de datos
 */

export class MathUtils {
  /**
   * Calcula la media de un array de números
   */
  static average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  /**
   * Encuentra el valor mínimo y máximo en un array
   */
  static minMax(numbers: number[]): { min: number; max: number } {
    if (numbers.length === 0) {
      return { min: 0, max: 0 };
    }
    
    return {
      min: Math.min(...numbers),
      max: Math.max(...numbers)
    };
  }

  /**
   * Normaliza valores a un rango 0-1
   */
  static normalize(numbers: number[]): number[] {
    const { min, max } = this.minMax(numbers);
    const range = max - min;
    
    if (range === 0) return numbers.map(() => 0);
    
    return numbers.map(num => (num - min) / range);
  }

  /**
   * Calcula la desviación estándar
   */
  static standardDeviation(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    
    const avg = this.average(numbers);
    const squaredDiffs = numbers.map(num => Math.pow(num - avg, 2));
    const avgSquaredDiff = this.average(squaredDiffs);
    
    return Math.sqrt(avgSquaredDiff);
  }
}
