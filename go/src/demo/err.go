package main

import (
	"errors"
	"fmt"
	"log"
)

func main() {
	err := errors.New("12345")
	fmt.Println(err)
	errs := fmt.Errorf("aaa %0.2f", -2.333333)
	fmt.Println(errs)
	log.Fatal(err)
}
