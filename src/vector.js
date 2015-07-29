import invariant from "invariant";

export default class Vector {
  constructor(x, y) {
    invariant(typeof x === "number", "Expected `x` to be a number.");
    invariant(typeof y === "number", "Expected `y` to be a number.");

    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(n) {
    this.x = this.x / n;
    this.y = this.y / n;
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
