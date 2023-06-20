const triangular = require('./triangular');

describe('triangular', () => {
  it('should return 0 when given 0', () => {
    expect(triangular(0)).toBe(0);
  });
  it('should return 1 when given 1', () => {
    expect(triangular(1)).toBe(1);
  });
  it('should return 0 when given -1', () => {
    expect(triangular(-1)).toBe(0);
  });
  it('should return 3 when given 2', () => {
    expect(triangular(2)).toBe(3);
  });
  it('should return 6 when given 3', () => {
    expect(triangular(3)).toBe(6);
  });
  it('should return 10 when given 4', () => {
    expect(triangular(3)).toBe(6);
  });
});
