package main

import (
	"fmt"
	"math"
	"reflect"
	"strings"
)

func main() {
	fmt.Println("HELLO WORLD")
	fmt.Println(math.Floor(2.75))
	fmt.Println(strings.Title("head first go"))
	fmt.Println("head first go, \nGo")
	fmt.Println(strings.Title("head first go"))

	fmt.Println(reflect.TypeOf("HELLO WORLD"))
	fmt.Println(reflect.TypeOf(111))
	fmt.Println(reflect.TypeOf(true))
	fmt.Println(reflect.TypeOf(3.15))
}
