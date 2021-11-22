package main

import "fmt"

type part struct {
	name string
	age  int
}

type car struct {
	name     string
	topSpeed float64
}

type student struct {
	name  string
	grade float64
}

func printInfo(s student) {
	fmt.Printf("Grade: %0.1f\n", s.grade)
	fmt.Println("Name: ", s.name)
}

func applyDiscount(s *student) {
	s.name = "wahaha"
}

func main() {
	var se student
	applyDiscount(&se)
	fmt.Println(se, "--------------")

	var s student
	s.name = "123"
	s.grade = 92.3
	printInfo(s)

	var structs struct {
		number  bool
		strings string
		ints    int
	}

	structs.strings = "123"
	structs.number = false
	structs.ints = 123
	fmt.Println(structs)

	var bolts part
	bolts.age = 123
	bolts.name = "张三"
	fmt.Println(bolts)

	var porsche car
	porsche.name = "car"
	porsche.topSpeed = 232
	fmt.Println(porsche)

	p := minimumOrder("zhangsan")
	fmt.Println(p, "p")

	var value student
	value.grade = 123
	var pointer *student = &value
	fmt.Println((*pointer).grade)
}

func minimumOrder(name string) part {
	var p part
	p.name = name
	p.age = 18

	return p
}
