package datafile

import (
	"bufio"
	"os"
	"strconv"
)

func GetFloats(fileName string) ([]float64, error) {
	var numbers []float64

	file, err := os.Open(fileName) // 打开数据文件进行读取

	if err != nil { // 如果打开文件出错，报告错误并退出
		return nil, err
	}

	scanner := bufio.NewScanner(file) // 为文件创建一个新的扫描器
	for scanner.Scan() {              // 从文件中读取一行
		number, err := strconv.ParseFloat(scanner.Text(), 64)
		if err != nil {
			return nil, err
		}
		numbers = append(numbers, number)
	}

	err = file.Close() // 关闭文件以释放资源
	if err != nil {
		return nil, err
	}

	if scanner.Err() != nil { // 如果扫描文件出现错误，报告错误并退出
		return nil, scanner.Err()
	}

	return numbers, nil
}
