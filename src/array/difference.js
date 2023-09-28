/**
 * @author kart jim
 *
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * 这个方法会返回一个新数组。
 *
 * @param {Array} arr
 * @param {any[]} args
 *
 * @return {Array}
 */
function difference(arr, ...args) {
  if (args.length === 0) {
    return [...arr];
  }
  const ans = [];
  const map = [];
  for (let arg of args) {
    map.push(new Set(arg));
  }
  for (let item of arr) {
    let isHas = false;
    for (let m of map) {
      if (m.has(item)) {
        isHas = true;
        break;
      }
    }
    if (!isHas) {
      ans.push(item);
    }
  }
  return ans;
}
export default difference;