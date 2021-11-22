package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	seconds := time.Now().Unix() // 获取毫秒
	rand.Seed(seconds)
	target := rand.Intn(100) + 1 // 生成 1- 100随机数
	fmt.Println("这是一个猜数字游戏，数字范围为 1 - 100")

	reader := bufio.NewReader(os.Stdin) // 允许读取键盘输入

	success := false
	for gresses := 0; gresses < 10; gresses++ {
		fmt.Println("你有", 10-gresses, "次机会")

		fmt.Print("请输入： ")
		input, err := reader.ReadString('\n') // 读取输入的内容，直到按 Enter 键
		if err != nil {
			log.Fatal(err)
		}
		input = strings.TrimSpace(input)  // 删除换行符
		gress, err := strconv.Atoi(input) // 将输入的字符串转换为 整数
		if err != nil {
			log.Fatal(err)
		}

		if gress < target {
			fmt.Println("猜低了")
		} else if gress > target {
			fmt.Println("猜高了")
		} else {
			success = true
			fmt.Println("猜对了")
			break
		}
	}

	if !success {
		fmt.Println("对不起，你没有猜对， 它是：", target)
	}
}
