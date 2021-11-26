package main

import "fmt"

type Whistle string

func (w Whistle) MarkSound() {
	fmt.Println("tweet", w)
}

type Horn string

func (h Horn) MarkSound() {
	fmt.Println("honk", h)
}

type NoiseMaker interface {
	MarkSound()
}

func play(n NoiseMaker) {
	n.MarkSound()
}

func main() {
	var tip NoiseMaker
	tip = Whistle("123")
	tip.MarkSound()
	tip = Horn("234")
	tip.MarkSound()

	play(Whistle("123"))
	play(Horn("456"))
}
