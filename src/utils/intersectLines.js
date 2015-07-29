import invariant from "invariant";
import Line from "../line";
import Vector from "../vector";
import isNumber from "./isNumber";

export default function intersectLines(a, b) {
  invariant(a instanceof Line, "Expected `a` to be a Line instance.");
  invariant(b instanceof Line, "Expected `b` to be a Line instance.");

  if (a.slope === b.slope) {
    return null;
  }

  if (a.intercept === b.intercept) {
    return new Vector(0, a.intercept);
  }

  const x = (b.intercept - a.intercept) / (a.slope - b.slope);
  const y = a.solve(x);

  if (!isNumber(x) || !isNumber(y)) {
    return null;
  }

  return new Vector(x, y);
}
