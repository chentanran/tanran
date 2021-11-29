package main

import (
	"log"
	"os"
	"text/template"
)

type Part struct {
	Name  string
	Count int
}

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func executeTemplate(text string, data interface{}) {
	tmpl, err := template.New("test").Parse(text)
	check(err)
	err = tmpl.Execute(os.Stdout, data)
	check(err)
}

func main() {
	text := "hello go {{.}} \n"
	executeTemplate(text, "123")
	executeTemplate(text, "345")
	executeTemplate(text, "www")
	executeTemplate("hello go {{if .}}11111{{end}}2222 \n", true)
	executeTemplate("hello go {{if .}}11111{{end}}2222 \n", false)
	executeTemplate("hello go {{.}} {{range .}}{{.}}{{end}}2222 \n", []string{"123", "234", "345"})

	executeTemplate("hello go {{.Name}}2222{{.Count}} \n", Part{Name: "123", Count: 1})
}
