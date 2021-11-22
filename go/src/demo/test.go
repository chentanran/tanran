package main

import (
	"fmt"
)

func main() {
	var price = 100
	var taxRate = 0.08
	var tax = float64(price) * taxRate
	var total = price + int(tax)
	var avail = 120
	var differ = avail - total
	fmt.Println(tax, "tax", total, "total", differ, "differ")

	a, b := 1, 2
	fmt.Println(a, b)
}
