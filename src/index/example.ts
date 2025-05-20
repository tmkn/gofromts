interface Item {
    label: string;
    price: number;
}

function calculatePrice(items: Item[]): number {
    let price = 0;

    for (const [_, item] of items.entries()) {
        price += item.price;
    }

    return price;
}

let items: Item[] = [
    { label: "item1", price: 10 },
    { label: "item2", price: 20 },
    { label: "item3", price: 30 }
];

let totalPrice = calculatePrice(items);

console.log(`Total price: ${totalPrice}`);
