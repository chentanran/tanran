package main

import "fmt"

func main() {
	fmt.Printf("%0.2f\n", 1.0/3.0)

	fmt.Printf("%2s | %2d\n", "wwwwsssssssssssssssssssssssssss", 505)

	fmt.Printf("%%2.1f: %2.1f\n", 123.345)

	fmt.Printf("$")
	fmt.Println()

	test("111")

	area(4.2, 3.0)
	area(5.2, 3.5)

	dozen := double(2.3)
	fmt.Println(dozen, "dozen")
}

func test(a string) {
	fmt.Printf("%s123 \n", a)
}

func area(width float64, height float64) (float64, error) {
	if width < 0 {
		return 0, fmt.Errorf("这个width %0.2f 是不合法的", width)
	}

	if height < 0 {
		return 0, fmt.Errorf("这个 height %2f 是不合法的", height)
	}

	areas := width * height
	return areas / 10.0, nil
}

func double(number float64) float64 {
	return number * 2
}
