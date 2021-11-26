package main

import "fmt"

type MyType string

type Number int

func (m MyType) sayHi() {
	fmt.Println("hi")
}

func (n *Number) Double() {
	*n *= 2
}

func main() {
	value := MyType("a mytype value")
	value.sayHi()
	wahaha := MyType("123")
	wahaha.sayHi()

	number := Number(4)
	number.Double()
	fmt.Println(number)
}
