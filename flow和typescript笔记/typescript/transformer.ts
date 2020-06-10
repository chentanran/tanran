import ts from 'typescript'

// 引入目标文件
const filePath = './index.ts'

// 创建一个 peogram 实例
const program = ts.createProgram([filePath])

// 为我们的 program 做一个类型检查器
const checker = program.getTypeChecker()

// 获取 index.ts 源代码的AST
const source = program.getSourceFile(filePath)

// 创建 proter实例为我们打印最后的 ast
const printer = ts.createPrinter()

// 我们提供给定类型的节点字符串的小助手
const syntaxToKind = (kind: ts.Node['kind']) => {
  return ts.SyntaxKind[kind]
}

// 从根节点开始遍历并打印
ts.forEachChild(source!, node => {
  console.log(syntaxToKind(node.kind))
})