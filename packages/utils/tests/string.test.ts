import { describe, expect, it } from 'vitest';
import { capitalize, camelToKebab, kebabToCamel } from '../src/string';

describe('String utils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle non-string input', () => {
      expect(capitalize(null as any)).toBe('');
      expect(capitalize(undefined as any)).toBe('');
    });
  });

  describe('camelToKebab', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(camelToKebab('helloWorld')).toBe('hello-world');
      expect(camelToKebab('HelloWorld')).toBe('hello-world');
    });
  });

  describe('kebabToCamel', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(kebabToCamel('hello-world')).toBe('helloWorld');
      expect(kebabToCamel('foo-bar-baz')).toBe('fooBarBaz');
    });
  });
}); 