const statusList = require("../../app/enums/status");
const {
  calculateMean,
  calculateMedian,
  calculateVariance,
} = require("../../app/utils/math");

describe("Utils- Math", () => {
  it("should return mean", () => {
    const res = calculateMean([1, 2, 3, 4, 5]);

    expect(res).toBe(3);
  });
  it("should return mean when data is not sorted", () => {
    const res = calculateMean([2, 5, 3, 4, 1]);

    expect(res).toBe(3);
  });
  it("should return median when data is not sorted", () => {
    const res = calculateVariance([2, 2.1, 3]);

    expect(res).toBe(0.20222222222222222);
  });
  //TODO: other test...
});
