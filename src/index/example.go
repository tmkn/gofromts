package main

import "fmt"

type Item struct {
	Label string
	Price int
}

func calculatePrice(items []Item) int {
	var price int = 0

	for _, item := range items {
		price += item.Price
	}

	return price
}

func main() {
	var items = []Item{
		{Label: "item1", Price: 10},
		{Label: "item2", Price: 20},
		{Label: "item3", Price: 30},
	}

	var totalPrice = calculatePrice(items)

	fmt.Printf("Total price: %d\n", totalPrice)
}
