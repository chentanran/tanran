package main

import (
	"log"
	"net/http"
)

func write(writer http.ResponseWriter, message string) {
	messages := []byte(message)
	_, err := writer.Write(messages)
	if err != nil {
		log.Fatal(err)
	}
}

func firstWrite(writer http.ResponseWriter, request *http.Request) {
	write(writer, "hello web")
}

func secondWrite(writer http.ResponseWriter, request *http.Request) {
	write(writer, "hello go")
}

func thirdlyWrite(writer http.ResponseWriter, request *http.Request) {
	write(writer, "hello cat")
}

func main() {
	http.HandleFunc("/one", firstWrite)
	http.HandleFunc("/two", secondWrite)
	http.HandleFunc("/three", thirdlyWrite)
	err := http.ListenAndServe("localhost:9998", nil)
	log.Fatal(err)
}
