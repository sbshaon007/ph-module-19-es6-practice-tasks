const getAvailableProducts = (products) => {
    if(
        !Array.isArray(products) 
        || products.length === 0
    ){
        return `Invalid`
    }

    for(const product of products){
        if(
            typeof product !== `object`
            || product === null
            || !Object.hasOwn(product, `name`)
            || !Object.hasOwn(product, `stock`)
        ){
            return `Invalid`
        }
    }

    const filteredProducts = products.filter(product => product.stock > 0);

    return filteredProducts;
}

const returnResult = getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }]);

console.log(returnResult);
