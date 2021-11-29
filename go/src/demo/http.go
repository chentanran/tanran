package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func responses(url string) {
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(body))
	fmt.Println(len(body))
}

func main() {
	// response("https://weread.qq.com/")
	responses("https://www.baidu.com/")
}
