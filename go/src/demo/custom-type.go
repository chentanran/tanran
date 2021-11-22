package main

import "fmt"

type Floats float64

type Floatw float64

func ToGallons(l Floatw) Floats {
	return Floats(l * 0.264)
}

func main() {
	arr := Floats(10.0)
	str := Floatw(20.0)

	arr = Floats(Floatw(30.1))
	fmt.Println(arr, str)
}
