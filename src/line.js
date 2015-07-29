import invariant from "invariant";

// Line, short for "linear function"
export default class Line {
  constructor(slope, intercept) {
    // For f(x) = m*x + a, `m` is the slope and `a` is the intercept
    invariant(typeof slope === "number", "Expected `slope` to be a number.");
    invariant(typeof intercept === "number", "Expected `intercept` to be a number.");

    this.slope = slope;
    this.intercept = intercept;
  }

  solve(x) {
    return this.slope * x + this.intercept;
  }

  equals(line) {
    return this === line || (
      this.slope === line.slope &&
      this.intercept === line.intercept
    );
  }
}
