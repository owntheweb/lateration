import invariant from "invariant";
import isNumber from "./utils/isNumber";

export default class Vector {
  constructor(x = 0, y = 0) {
    invariant(typeof x === "number", "Expected `x` to be a number.");
    invariant(typeof y === "number", "Expected `y` to be a number.");

    invariant(isNumber(x) && isNumber(y), "Expected `x` and `y` to be numbers.");

    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(n = 1) {
    invariant(n !== 0, "NaN Error! Can't divide by 0.");

    this.x = this.x / n;
    this.y = this.y / n;
  }

  asObject() {
    return {
      x: this.x,
      y: this.y
    };
  }

  asArray() {
    return [this.x, this.y];
  }

  equals(vector) {
    return this === vector || (
      this.x === vector.x &&
      this.y === vector.y
    );
  }
}
