package main

import (
	"fmt"
	"log"

	"../datafile"
)

func main() {
	numbers, err := datafile.GetFloats("data.text")
	if err != nil {
		log.Fatal(err)
	}

	var sum float64 = 0
	for _, number := range numbers {
		sum += number
	}

	sampleCount := float64(len(numbers))
	fmt.Printf("average: %0.2f\n", sum/sampleCount)
	fmt.Println(numbers)
}
