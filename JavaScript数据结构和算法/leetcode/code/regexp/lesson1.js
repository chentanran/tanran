// 判断输入是否是重复的
export default (str) => {
  // \1 捕获括号中的内容 + 匹配一个或多个 当后面的不重复时, 自动分组
  let regexp = /^(\w+)\1+$/
  return regexp.test(str)
}
