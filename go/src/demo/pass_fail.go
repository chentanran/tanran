package main

import (
	"fmt"

	"../keyboard"
)

func main() {
	fmt.Print("请输入分数: ")

	grade, err := keyboard.GetFloat()

	if err != nil {
		fmt.Println("输入不符合规范")
	}

	var status string
	if grade >= 60 {
		status = "passing"
	} else {
		status = "failing"
	}

	fmt.Println(grade, status, "status")
}
