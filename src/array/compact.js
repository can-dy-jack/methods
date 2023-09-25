/**
 * @author kart jim
 *
 * 创建一个新数组，包含原数组中所有的非假值元素。
 * false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 *
 * @param {Array} arr
 * @return {Array}
 */

function compact(arr) {
  const ans = [];
  for (let item of arr) {
    if (item != null && !Number.isNaN(item) && item) {
      ans.push(item);
    }
  }
  return ans;
}

export default compact;