import fakeData from './FakeData';

describe('Fake data generator', () => {
  it('should produce 10 rows of data', () => {
    const data = fakeData();
    expect(data.length).toBe(10);
  });
  it('should produce 20 rows of data', () => {
    const data = fakeData(20);
    expect(data.length).toBe(20);
  });
  it('should produce 0 rows of data', () => {
    const data = fakeData(-1);
    expect(data.length).toBe(0);
  });
})