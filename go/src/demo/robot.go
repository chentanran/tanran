package main

import "fmt"

type Robot string

type NoiseMakers interface {
	MakeSound()
}

func (r Robot) MakeSound() {
	fmt.Println("123")
}

func (r Robot) Walk() {
	fmt.Println("oooo")
}

func main() {
	var noiseMaker NoiseMakers = Robot("BotcoAmber")
	noiseMaker.MakeSound()

	var robot Robot = noiseMaker.(Robot)
	robot.Walk()
}
