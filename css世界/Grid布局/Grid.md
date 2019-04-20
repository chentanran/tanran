# Grid布局

## Grid Container 网格容器

+ 元素应用 display: grid;, 它是其所有网格项的父元素

## Grid Item 网格项

+ 网格容器的子元素, 下面的子元素是网络项

## Grid Line 网格线

+ 组成网格项的分界线

## Grid Track 网格轨道

+ 两个相邻的网格线之间的网格轨道

## Grid Cell 网格单元

+ 两个相邻的列网格线和两个相邻的行网格线组成的网格单元

## Grid Area 网格区域

+ 四个网格线包围的总空间

## fr(单位)

+ 剩余空间分配数. 用于在一系列长度值中分配剩余空间, 如果多个已指定了多个部分, 则剩下的空间根据各自的数字按比例分配.

## gr(单位) -- 暂时不是标准属性

+ 网格数

## Display

+ Grid - 生成块级网格.
+ inline-grid - 生成行内网格
+ subgrid - 如果网格容器本身是网格项(嵌套网格容器), 此属性用来继承其父网格容器的列,行大小.

```javascript
  注意: 当元素设置了网格布局, column, float, clear, vertical-align属性无效
        display: subgrid; 目前所有浏览器都不兼容.
```

## grid-template

+ grid-template-columns 定义有多少列
+ grid-template-rows 定义有多少行

+ 属性值
```javascript
  轨道大小(track-size): 可以使用css长度(px, em等), 百分比, 或用分数(用fr单位)
  网格线名字(line-name): 可以选择任何名字
```

## grid-template-areas

+ 通过引用grid-area属性指定的网格区域的名称来定义网格模板.

+ 属性值
```javascript
  <grid-area-name>: 使用grid-area属性设置的网格区域的名称
  ".": 点号代表一个空网格单元
  none: 没有定义网格区域
```

## gap 行与列的间距

+ grid-column-gap 列间距
+ grid-row-gap 行间距

## items

+ justify-items 沿着行轴对齐网格的内容
+ align-items 沿着列轴对齐网格内的内容
+ place-items 控制行和列的方向(align-items在前, justify-items在后)

```javascript
  start: 内容与网格区域的左端对齐
  end: 内容与网格区域的右端对齐
  center: 内容位于网格区域的中心位置
  stretch: 内容宽度占据整个网格区域空间(默认值)
```

## content

+ justify-content 设置网格容器内的网格沿着行轴对齐网格的对齐方式
+ align-content 设置网格容器内的网格沿着列轴对齐网格的对齐方式
+ palce-content 设置行和列的对齐方式

```css
  start: 网格与网格容器的左边对齐
  end: 网格与网格容器的右边对齐
  center: 网格与网格容器的中间对齐
  stretch: 调整grid item的大小, 让宽度填充整个网格容器

  space-around: 在grid item之间设置均等宽度的空白间隙, 其外边缘间隙大小为中间空白间隙宽度的一半
  space-between: 在 grid item之间设置均等宽度空白间隙, 其外边缘无间隙
  space-evenly: 在每个 grid item 之间设置均等宽度的空白间隙, 包括外边缘
```

## grid-auto

### grid-auto-columns / grid-auto-rows
+ 指定自动生成的网格轨道(又名隐式网格轨道)的大小
 
### 隐式网格轨道
+ 隐式网格轨道在显示的定位超出指定网格范围的行或列时被创建

```javascript
  .container{
    grid-auto-columns: <track-size> ...;
    grid-auto-rows: <track-size> ...;
  }
  属性值:
    <track-size>: 可以是一个长度值, 一个百分比值, 或者一个自由空间的一部分(使用fr单位)
```

### grid-auto-flow
+ 控制自动布局算法的工作方式

```javascript
  .container{
    grid-auto-flow: row | column | row dense | column dense
  }

  属性值:
    row: 告诉自动布局算法依次填充每行, 根据需要添加新行
    column: 告诉自动布局算法依次填充每列, 根据需要添加新列
    dense: 告诉自动布局算法, 如果后面出现较小的grid item, 则尝试在网格中填充空洞
```

## css 函数

### repeat()

+ 跟踪列表的重复片段,允许大量显示重复模式的列或行以更紧凑的形式编写
+ 可用范围: 这个函数可用用在css Grid属性 grid-template-columns 和 grid-template-rows

```javascript
  .container{
    grid-template-columns: repeat(repeat, values);
    grid-template-rows: repeat(repeat, values);
  }

  重复次数:
  <number>: 整数, 确定确切的重复次数
  <auto-fill>: 以网格项为准自动填充
  <auto-fit>: 以网格容器为准自动填充

  值:
  <length>: 非负长度
  <percentage>: 相对于列轨道中网格容器的内联大小的非负百分比, 以及行轨道中网格容器的块长宽
  <flex>: 单位为fr的非负维度, 指定轨道弹性布局的系数值
  <max-content>: 表示网格的轨道长度自适应内容最大的那个单元格
  <min-content>: 表示网格的轨道长度自适应内容最小的那个单元格
  <auto>: 作为最大值时, 等价于max-content. 作为最小值时, 它表示轨道中单元格最小宽度(由min-width/min-height)的最大值
```

### fit-content()

+ <length>: 一个绝对的长度
+ <percentage>: 相对于给定轴上可用空间的百分比

### minmax()

+ 定义了一个长宽范围的闭区间
```javascript
  <length>: 非负长度
  <percentage>: 相对于列轨道中网格容器的内联大小的非负百分比, 以及行轨道中网格容器的块长宽
  <flex>: 单位为fr的非负维度, 指定轨道弹性布局的系数值
  <max-content>: 表示网格的轨道长度自适应内容最大的那个单元格
  <min-content>: 表示网格的轨道长度自适应内容最小的单元格
  <auto>: 最为最大值时, 等价于 max-content 作为最小值时, 它表示轨道中单元格最小长宽(min-width/min-height)的最大值
```

## 网格容器

### start / end

+ grid-column-start
+ grid-column-end
+ grid-row-start
+ grid-row-end
+ 使用特定的网格线确定 grid item 在网格内的位置

```javascript
  .item{
    grid-column-start: <number> | <name> | span <number> | span <name> | auto
    grid-column-end: <number> | <name> | span <number> | span <name> | auto
    grid-row-start: <number> | <name> | span <number> | span <name> | auto
    grid-row-end: <number> | <name> | span <number> | span <name> | auto
  }

  属性值:
    <line>: 可以是一个数字来指代相应编号的网格线, 也可以使用名称指代相应命名的网格线
    span <number>: 网格项将跨越指定数量的网格轨道
    span <name>: 网格项将跨越一些轨道, 直到碰到指定命名的网格线
    auto: 自动布局, 或者自动跨越, 或者跨越一个默认的轨道
  说明:
    如果没有声明 grid-column-end / grid-row-end, 默认情况下, 该网格项将跨越1个轨道
    网格项科研互相重叠, 可以使用z-index来控制它们的堆叠顺序
```

#### start / end 简写模式

+ grid-column / grid-row
```javascript
  .itme{
    grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    grid-row: <start-line> / <end-line> | <start-line> / span <value>;
  }
```

### grid-area 网格区域

+ 给 grid item进行命名以便于使用 grid-template-areas属性创建模板时来进行引用
```javascript
  .item{
    grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
  }
```

## self
+ justify-self: 沿着行轴对齐 grid item 里的内容
+ align-self: 沿着列轴对齐 grid item 里的内容

```javascript
  .item{
    justify-self: <start> | <end> | <center> | <stretch>;
  }
```