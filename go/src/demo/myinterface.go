package main

import "fmt"

type MyInterface interface {
	MethodWithoutParameters()
	MethodWithParameter(float64)
	MethodWithReturnValue() string
}

type MyType int

func (m MyType) MethodWithoutParameters() {
	fmt.Println("这个方法没有参数")
}

func (m MyType) MethodWithParameter(f float64) {
	fmt.Println("这个方法有参数", f)
}

func (m MyType) MethodWithReturnValue() string {
	return "这是一个返回值"
}

func (m MyType) MethodNotInInterface() {
	fmt.Println("这个方法不在 interface 里面定义")
}

func main() {
	var value MyInterface
	value = MyType(12)
	value.MethodWithoutParameters()
	value.MethodWithParameter(123)
	fmt.Println(value.MethodWithReturnValue())
	// value.MethodNotInInterface() // 访问不到
}
