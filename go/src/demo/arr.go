package main

import "fmt"

func main() {
	var notes [7]string
	notes[0] = "123"
	notes[1] = "234"
	notes[2] = "345"

	fmt.Println(notes)

	var arr [3]int = [3]int{1, 2, 3}
	fmt.Println(arr)

	arr1 := [3]string{"123", "234", "345"}
	fmt.Println(arr1, "arr1")

	fmt.Printf("%#v\n", arr1) // 按照 go 代码中显示的方式格式化值
	fmt.Printf("%#v\n", arr)

	for i := 0; i < len(notes); i++ {
		fmt.Println(i, notes[i])
	}

	fmt.Println(len(arr1), "arr1")

	for _, note := range notes {
		fmt.Println(note)
	}

	sum := 0
	for _, a := range arr {
		sum += a
	}
	fmt.Println(sum, "sum")
	sumFloat := float64(sum)
	saveTree := float64(len(arr))
	fmt.Println(sumFloat/saveTree, "saveTree")
}
