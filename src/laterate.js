import invariant from "invariant";
import Circle from "./circle";

import pair from "./utils/pair";
import subtractCircles from "./utils/subtractCircles";
import intersectLines from "./utils/intersectLines";

export default function laterate(arr) {
  for (let obj of arr) {
    invariant(obj instanceof Circle, "All elements in `arr` are expected to be Circle instances.");
  }
  invariant(arr.length > 2, "At least three Circles are necessary for lateration.");

  let pairs = pair(arr);

  const lines = pairs
    .map(pair => subtractCircles(pair[0], pair[1]))
    .filter(obj => obj && obj.slope && obj.intercept);

  pairs = pair(lines);

  const points = pairs
    .map(pair => intersectLines(pair[0], pair[1]))
    .filter(obj => obj && obj.x && obj.y);

  if (points.length === 0) {
    console.error("Out of Range: No point could be calculated from Circle set.");
    return null;
  }

  // NOTE: This is a destructive operation as it is mutating points!
  const result = points.reduce((a, b) => {
    a.x += b.x;
    a.y += b.y;
    return a;
  });

  result.normalize(points.length);
  return result;
}
