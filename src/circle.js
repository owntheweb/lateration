import invariant from "invariant";
import Vector from "./vector";

export default class Circle {
  constructor(position, radius) {
    invariant(position instanceof Vector, "Expected `position` to be a Vector instance.");
    invariant(typeof radius === "number", "Expected `radius` to be a number.");

    this.position = position;
    this.radius = radius;
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  equals(circle) {
    return this === circle || (
      this.position.equals(circle.position) &&
      this.radius === circle.radius
    );
  }
}
