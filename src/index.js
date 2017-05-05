/**
 * @param {Array<Array|Number|String|Object>}
 * @return {Array<Number|String|Object>}
 */
export default function vlatten (array) {
  return Array.isArray(array)
    ? [].concat.apply([], array.map(vlatten))
    : array;
}
