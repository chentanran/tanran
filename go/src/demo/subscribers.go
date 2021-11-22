package main

import (
	"fmt"

	"../magezine"
)

func main() {
	var s magezine.Subscriber
	s.Rate = 4.99
	fmt.Println(s)

	var d = magezine.Subscriber{Rate: 333, Name: "123"}
	var address = magezine.Address{Street: "111"}

	d.Address = address
	d.City = "武汉"
	fmt.Printf("%#v\n", d)
}
