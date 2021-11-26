package main

import "fmt"

type playInterface interface {
	Play(string)
	Stop()
}

type TapePlayer struct {
	Batteries string
}

type TapeRecorder struct {
	Microphones int
}

func TryOut(player playInterface) {
	player.Play("qqqqqq")
	player.Stop()
	record, ok := player.(TapeRecorder)
	if ok {
		record.Record()
	}
}

func (t TapePlayer) Play(song string) {
	fmt.Println("playing", song)
}

func (t TapePlayer) Stop() {
	fmt.Println("stopped")
}

func (t TapeRecorder) Play(song string) {
	fmt.Println("playing", song)
}

func (t TapeRecorder) Stop() {
	fmt.Println("Stop")
}

func (t TapeRecorder) Record() {
	fmt.Println("recording")
}

func playList(device playInterface, songs []string) {
	for _, song := range songs {
		device.Play(song)
	}
	device.Stop()
}

func main() {
	// var player playInterface
	// player = TapePlayer{}
	// mixtape := []string{"123", "234", "345"}
	// playList(player, mixtape)

	// var tape playInterface = TapeRecorder{}
	// playList(tape, mixtape)
	// recorder := tape.(TapeRecorder)
	// recorder.Record()

	TryOut(TapePlayer{})
	TryOut(TapeRecorder{})
}
