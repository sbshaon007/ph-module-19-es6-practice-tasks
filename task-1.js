const getFormattedPrices = (prices) => {

    if(
        !Array.isArray(prices) 
        || prices.length === 0
    ){
        return `Invalid`;
    }

    for(const price of prices){
        if(typeof price !== `number`){
            return `Invalid`;
        }
    }

    const newArr = prices.map(price => `$${price}`);

    return newArr;
}

const returnResult = getFormattedPrices([100, 250, 75]);

console.log(returnResult);
