/**
 * @author kart jim
 *
 * 创建一个新数组，将array与数组或值连接在一起。
 *
 * @param {Array} arr
 * @param {any} args
 */
function concat(arr, ...args) {
  for (let item of args) {
    if (Array.isArray(item)) {
      arr.push(...item);
    } else {
      arr.push(item);
    }
  }
  return arr;
}

export default concat;