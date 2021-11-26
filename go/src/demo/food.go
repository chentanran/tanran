package main

import (
	"fmt"
	"strconv"
)

type Refrigerator string

func (r Refrigerator) open() {
	fmt.Println("eeee")
}

func (r Refrigerator) close() {
	fmt.Println("bbb")
}

func (r Refrigerator) FindFood(food string) error {
	r.open()
	defer r.close()
	_, err := strconv.ParseBool(food)
	if err != nil {
		fmt.Println("aaaa")
	} else {
		return fmt.Errorf("123", food)
	}

	return nil
}

func main() {
	var r Refrigerator
	r.FindFood("123")
}
