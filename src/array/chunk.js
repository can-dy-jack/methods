/**
 * @author kart jim
 *
 * @param {Array} arr
 * @param {Number} size = 1
 * @return {Array[]}
 */
function chunk(arr, size = 1) {
  const ans = [];
  if (size <= 1) {
    return arr;
  }
  let slice = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0 && i > 0) {
      ans.push(slice);
      slice = [];
    }
    slice.push(arr[i]);
  }
  ans.push(slice);
  return ans;
}

export default chunk;