const timeConverter = require('./time-converter.js');

describe('time-converter', () => {
  it('module should return a function', () => {
    expect(typeof timeConverter).toBe('function');
  });
});
