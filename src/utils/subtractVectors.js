import invariant from "invariant";
import Vector from "../vector";

export default function subtractVectors(a, b) {
  invariant(a instanceof Vector, "Expected `a` to be a Vector instance.");
  invariant(b instanceof Vector, "Expected `b` to be a Vector instance.");
  invariant(!a.equals(b), "Expected unique vectors.");

  return new Vector(b.x - a.x, b.y - a.y);
}
