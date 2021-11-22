package keyboard

import (
	"bufio"
	"log"
	"os"
	"strconv"
	"strings"
)

func GetFloat() (float64, error) {
	render := bufio.NewReader(os.Stdin)
	// input, _ := render.ReadString('\n') // _ 可以忽略一个错误
	input, err := render.ReadString(('\n'))
	if err != nil {
		log.Fatal(err) // 报告错误并停止程序运行
	}

	input = strings.TrimSpace(input)

	number, err := strconv.ParseFloat(input, 64)

	if err != nil {
		log.Fatal(err) // 报告错误并停止程序运行
	}

	return number, err
}
