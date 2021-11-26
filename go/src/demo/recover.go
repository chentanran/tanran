package main

import "fmt"

func calmDown() {
	p := recover()
	err, ok := p.(error)
	if ok {
		fmt.Println(err.Error())
	}
}

func freakOut() {
	defer calmDown()
	err := fmt.Errorf("kkkkk")
	panic(err)
}

func main() {
	freakOut()
	fmt.Println("哇哈哈真好喝")
}
