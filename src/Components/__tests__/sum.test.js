import { sum } from "../testMethods";
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).not.toBe(5);
  });

  test('throws error when first argument is missing', () => {
    expect(() => sum(undefined, 3)).toThrow('sss');
  });
