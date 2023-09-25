/**
 * @author kart jim
 *
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
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