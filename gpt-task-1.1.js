const getMostOrderedFood = orders => {

    let totals = {};
    let mostQuantity = 0;
    let topFood = '';

    for (const order of orders){

        totals[order.food] = (totals[order.food] || 0) + order.quantity;

        if(totals[order.food] > mostQuantity){

            mostQuantity = totals[order.food];
            topFood = order.food;
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