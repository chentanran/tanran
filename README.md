# 学习 生活 共勉

判断是否是移动端

const isMobile = () => 'ontouchstart' in window

禁止网页复制粘贴

const html = document.querySelector('html')
html.oncopy = () => false
html.onpaste = () => false

input框只能输入中文

const input = document.querySelector('input[type="text"]') const clearText = target => {     const {         value     } = target     target.value = value.replace(/[^\u4e00-\u9fa5]/g, '') } input.onfocus = ({target}) => {     clearText(target) } input.onkeyup = ({target}) => {     clearText(target) } input.onblur = ({target}) => {     clearText(target) } input.oninput = ({target}) => {     clearText(target) }

