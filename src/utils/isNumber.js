export default function isNumber(x) {
  return (
    !Number.isNaN(x) &&
    x !== Number.POSITIVE_INFINITY &&
    x !== Number.NEGATIVE_INFINITY
  );
}
