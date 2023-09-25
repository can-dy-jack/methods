/**
 * @author kart jim
 *
 * @description 生成柯里化函数
 *
 * @param {Function} func 需要柯里化的函数
 * @param {Number} num 柯里化的次数
 * @param {any[]} args 函数执行传入的参数
 * @param {Object} vm 如果需要，提供函数执行的this
 *
 * @returns {Function}
 */
function curry(func, num = 1, args = [], vm) {
  if (num <= 0) {
    return func.apply(vm ? vm : this, args);
  }
  return (...args2) => curry(func, num - 1, args.concat(args2), vm);
}

export default curry;