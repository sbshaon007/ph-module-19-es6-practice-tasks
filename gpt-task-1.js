const getMostOrderedFood = orders => {

    const totalOrders = orders.reduce((sum, currentOrder) => {

        sum[currentOrder.food] = (sum[currentOrder.food] || 0) + currentOrder.quantity;

        return sum;

    }, {});

    let topFood = '';
    let topOrderQuantity = 0;

    for (const food in totalOrders) {

        let currentValue = totalOrders[food];

        if (currentValue > topOrderQuantity) {
            
            topOrderQuantity = currentValue;
            topFood = food;
        }
    }

    return topFood;
}

let odr = [
    { food: "Burger", quantity: 2 },
    { food: "Pizza", quantity: 1 },
    { food: "Burger", quantity: 3 },
    { food: "Pasta", quantity: 4 }
]

console.log(getMostOrderedFood(odr));
