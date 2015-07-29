import invariant from "invariant";
import Vector from "../vector";
import isNumber from "./isNumber";

export default function subtractVectors(a, b) {
  invariant(a instanceof Vector, "Expected `a` to be a Vector instance.");
  invariant(b instanceof Vector, "Expected `b` to be a Vector instance.");
  invariant(!a.equals(b), "Expected unique vectors.");

  if (a.equals(b)) {
    return new Vector(); // Null Vector
  }

  const x = b.x - a.x;
  const y = b.y - a.y;

  if (!isNumber(x) || !isNumber(y)) {
    return null;
  }

  return new Vector(x, y);
}
