const  getTopSellingProduct = (orders) => {

    const totals = orders.reduce((accumulator, currentOrder) => {
        
        accumulator[currentOrder.product] = (accumulator[currentOrder.product] || 0) + currentOrder.unitsSold;

        return accumulator;
        
    },{});

    let topProduct = '';
    let topSellingUnit = 0;

    for (const product in totals){

        let value = totals[product];

        if(value > topSellingUnit ){

            topSellingUnit = value;
            topProduct = product;
        }
    }

    return topProduct;
}

console.log(getTopSellingProduct([{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }]));

