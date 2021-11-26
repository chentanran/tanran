package main

import (
	"fmt"
	"io/ioutil"
	"log"
)

func main() {
	files, err := ioutil.ReadDir("./directory")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(files, "files")
	for _, file := range files {
		if file.IsDir() {
			fmt.Println(file.Name())
		} else {
			fmt.Println(file.Name())
		}
	}
}
