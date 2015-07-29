import invariant from "invariant";

export default function pair(arr) {
  invariant(Array.isArray(arr), "Expected `arr` to be an array.");

  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const _i = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const _j = arr[j];
      result.push([ _i, _j ]);
    }
  }

  return result;
}
