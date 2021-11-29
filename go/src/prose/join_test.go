package parse

import (
	"fmt"
	"testing"
)

type testData struct {
	list []string
	want string
}

func TestElements(t *testing.T) {
	tests := []testData{
		testData{list: []string{"apple"}, want: "apple"},
		testData{list: []string{"apple", "orange"}, want: "apple and orange"},
		testData{list: []string{"apple", "orange", "pear"}, want: "apple, orange and pear"},
	}

	for _, test := range tests {
		got := JoinWithCommas(test.list)
		if got != test.want {
			t.Error(fmt.Sprintf("JoinWithCommas(%#v) = \"%s\", want \"%s\"", list, got, want))
		}
	}
}
