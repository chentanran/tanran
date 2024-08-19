### 创建项目
```
npx create-vite ctr-react-component
```
### 安装依赖
```
npm install

npm install --save react-transition-group lodash-es dayjs classnames

npm i --save-dev @types/react-transition-group
```

### 编译代码
```
npx tsc -p tsconfig.build.json --module ESNext --outDir dist/esm

npx tsc -p tsconfig.build.json --module commonjs --outDir dist/cjs

```

### 编译样式
```
npx sass ./src/Calendar/index.scss ./dist/esm/Calendar/index.css

npx sass ./src/Calendar/index.scss ./dist/cjs/Calendar/index.css

npx sass ./src/Message/index.scss ./dist/esm/Message/index.css

npx sass ./src/Message/index.scss ./dist/cjs/Message/index.css

```

### package.json 入口文件
```
"main": "dist/cjs/index.js",
"module": "dist/esm/index.js",
"types": "dist/esm/index.d.ts",
"files": [
    "dist",
    "package.json",
    "README.md"
],

```

### 发布
```
npm adduser

npm publish
```

