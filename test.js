const assert = require('assert');
const solution = require('./solution.js');
describe('solution', () => {
    it('should return the correct dictionary when all days are present', () => {
      const input = {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2,
      };
      const expectedOutput = {
        'Mon': -6,
        'Tue': 2,
        'Wed': 2,
        'Thu': 4,
        'Fri': 6,
        'Sat': 8,
        'Sun': 2,
      };
      assert.deepEqual(solution(input), expectedOutput);
    });
  
    it('should return the correct dictionary when some days are missing', () => {
      const input = {
        '2020-01-01': 6,
        '2020-01-04': 12,
        '2020-01-05': 14,
        '2020-01-06': 2,
        '2020-01-07': 4,
      };
      const expectedOutput = {
        'Mon': 2,
        'Tue': 4,
        'Wed': 6,
        'Thu': 8,
        'Fri': 10,
        'Sat': 12,
        'Sun': 14,
      };
      assert.deepEqual(solution(input), expectedOutput);
    });
  
    it('should return the correct dictionary when only Mon and Sun are present', () => {
      const input = {
        "2023-05-02": 1, "2023-05-03": 3, "2023-05-04": 2, "2023-05-05": 5, "2023-05-06": 1, "2023-05-07": 2, "2023-05-08": 3
      };
      const expectedOutput = {
        "Mon": 1, "Tue": 3, "Wed": 2, "Thu": 5, "Fri": 1, "Sat": 2, "Sun": 3
      };
      assert.deepEqual(solution(input), expectedOutput);
    });
  });
  