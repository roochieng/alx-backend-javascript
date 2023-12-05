// Function that returns a boolean if all the elements
// in the array exist within the set.


export default function hasValuesFromArray (_set, array) {
  return array.map((x) => _set.has(x)).reduce((x, y) => (!!y), false);
}
