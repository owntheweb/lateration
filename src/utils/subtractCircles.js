import invariant from "invariant";
import Circle from "../circle";
import Line from "../line";

import subtractVectors from "./subtractVectors";

function sqr(x) {
  return x * x;
}

export default function subtractCircles(a, b) {
  invariant(a instanceof Circle, "Expected `a` to be a Circle instance.");
  invariant(b instanceof Circle, "Expected `b` to be a Circle instance.");

  const vec = subtractVectors(a.position, b.position);
  if (vec.length >= a.radius + b.radius) {
    return null;
  }

  const slope = (a.x - b.x) / (b.y - a.y);
  const intercept = (
    sqr(a.x) +
    sqr(a.y) +
    sqr(b.radius) -
    sqr(a.radius) -
    sqr(b.x) -
    sqr(b.y)
  ) / (2 * (a.y - b.y));

  return new Line(slope, intercept);
}
