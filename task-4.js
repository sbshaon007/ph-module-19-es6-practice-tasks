const getTotalStockValue = (products) => {
    if(
        !Array.isArray(products)
        || products.length === 0
    ){
        return `Invalid`;
    }

    for(const product of products){

        if(
            typeof product !== `object`
            || product === null
            || !Object.hasOwn(product, `price`)
            || !Object.hasOwn(product, `stock`)
            || typeof product.price !== `number`
            || typeof product.stock !== `number`
        ){
            return `Invalid`;
        }
    }

    const total = products.reduce((sum, product) =>{

        let costPerProduct = (product.price * product.stock);

        let totalCost = costPerProduct + sum;

        return totalCost;
        
    }, 0);

    return total;
}

console.log(getTotalStockValue( [{ price: 50, stock: 4 }, { price: 20, stock: 10 }]));
