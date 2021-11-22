package main

import "fmt"

func main() {
	// mount := 6
	// fmt.Println(mount)
	// fmt.Println(&mount)
	// fmt.Println(*&mount)

	// var myInt int
	// fmt.Println(reflect.TypeOf(&myInt))

	// myInt := 4
	// myIntPointer := &myInt
	// fmt.Println(myIntPointer)
	// fmt.Println(*myIntPointer)

	// var myInt int
	// var myIntPointer *int

	// myInt = 42
	// myIntPointer = &myInt
	// fmt.Println(*myIntPointer)

	truth := true
	negate(&truth)
	fmt.Println(truth)

	lies := false
	negate(&lies)
	fmt.Println(lies)
}

func negate(myBooolean *bool) {
	*myBooolean = !*myBooolean
}
