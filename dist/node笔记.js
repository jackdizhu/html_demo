
// node 命令执行文件 获取 命令参数
let a = () => {
  var arguments = process.argv.splice(2);
  return arguments
}
console.log(a())