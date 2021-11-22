package main

import "fmt"

func main() {
	var maps map[string]int
	maps = make(map[string]int)
	maps["o"] = 1
	maps["b"] = 2
	map1, ok := maps["o"]
	fmt.Println(map1, ok)

	for key, value := range maps {
		fmt.Println(key, value, "value")
	}

	map2 := make(map[string]int)
	map2["p"] = 1

	map3 := map[string]int{"a": 1, "b": 3}
	fmt.Println(map2, map3)
}
