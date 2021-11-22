package main

import "fmt"

func main() {
	notes := make([]string, 7)
	fmt.Println(notes, "notes")

	letters := []string{"a", "b", "c"}
	for _, letter := range letters {
		fmt.Println(letter)
	}

	slice := letters[1:]
	fmt.Println(slice, "slice")

	arr := []string{"a", "b"}
	fmt.Println(arr)
	arr = append(arr, "c")
	fmt.Println(arr)
	arr = append(arr, "d", "e")
	fmt.Println(arr)

	array := []string{"a", "b", "c", "d", "e"}
	slice1 := array[1:3]
	slice1 = append(slice1, "x")
	slice1 = append(slice1, "y", "z")
	fmt.Println(slice1)
}
