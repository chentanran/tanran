package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	file, err := os.Open("data.text") // 打开数据文件进行读取

	if err != nil { // 如果打开文件出错，报告错误并退出
		log.Fatal(err)
	}

	scanner := bufio.NewScanner(file) // 为文件创建一个新的扫描器

	for scanner.Scan() { // 从文件中读取一行
		fmt.Println(scanner.Text())
	}

	err = file.Close() // 关闭文件以释放资源
	if err != nil {
		log.Fatal(err)
	}

	if scanner.Err() != nil { // 如果扫描文件出现错误，报告错误并退出
		log.Fatal(scanner.Err())
	}
}
