const timeConverter = require('./time-converter.js');

function toBeNaN (value) {
  return isNaN(value) && typeof value === 'number';
}

describe('time-converter', () => {
  it('module should return a function', () => {
    expect(typeof timeConverter).toBe('function');
  });

  it('should return a string', () => {
    const testResult = timeConverter(2000);
    expect(typeof testResult).toBe('string');
  });

  it('should return NaN if string, object, decimal', () => {
    const invalidSecondsA = timeConverter('a');
    const invalidSecondsB = timeConverter(2000.5);
    const invalidSecondsC = timeConverter({});

    expect(toBeNaN(invalidSecondsA)).toBeTruthy();
    expect(toBeNaN(invalidSecondsB)).toBeTruthy();
    expect(toBeNaN(invalidSecondsC)).toBeTruthy();
  });

  it('it should convert seconds in hours, minutes and seconds', () => {
    const timeFirst = timeConverter(3600);
    expect(timeFirst).toBe('1:0:0');
  });
});
