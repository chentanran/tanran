# 清空dist目录中的旧文件
echo '正在清除原有dist文件...'
rm -rf dist/*.css

# 打包出不压缩的CSS文件main.css
echo '正在生成main.css文件...'
npx postcss src/main.css -o dist/main.css -u postcss-import autoprefixer --no-map 

# 打包出被压缩的CSS文件main.min.css
echo '正在生成main.min.css文件...'
npx postcss src/main.css -o dist/main.min.css -u postcss-import autoprefixer cssnano --no-map 