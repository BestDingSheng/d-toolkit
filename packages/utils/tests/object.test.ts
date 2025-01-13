import { describe, expect, it } from 'vitest';
import { deepClone, flattenObject } from '../src/object';

describe('Object utils', () => {
  describe('deepClone', () => {
    it('should deep clone objects', () => {
      const obj = {
        a: 1,
        b: { c: 2 },
        d: [1, 2, { e: 3 }],
      };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });
  });

  describe('flattenObject', () => {
    it('should flatten nested objects', () => {
      const obj = {
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3,
          },
        },
      };
      expect(flattenObject(obj)).toEqual({
        'a': 1,
        'b.c': 2,
        'b.d.e': 3,
      });
    });
  });
}); 