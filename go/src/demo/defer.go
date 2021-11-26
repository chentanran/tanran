package main

import (
	"fmt"
	"log"
)

func lize() error {
	defer fmt.Println("123")
	fmt.Println("234")
	fmt.Println("345")
	return fmt.Errorf("i do not want to talk")
}

func main() {
	err := lize()
	if err != nil {
		log.Fatal(err)
	}
}
