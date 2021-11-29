package main

import (
	"fmt"
	"time"
)

func a() {
	for i := 0; i < 50; i++ {
		fmt.Printf("a")
	}
}

func b() {
	for i := 0; i < 50; i++ {
		fmt.Printf("b")
	}
}

func main() {
	go a()
	go b()
	time.Sleep(time.Second)
}
