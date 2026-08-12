const findProductByName = (products, name) => {
    if(
        !Array.isArray(products)
        || products.length === 0
        || typeof name !== `string`
    ){
        return `Invalid`;
    }

    for(const product of products){
        if(
            typeof product !== `object`
            || product === null
            || !Object.hasOwn(product, `name`)
        ){
            return `Invalid`;
        }
    }

    const productByName = products.find(product => product.name === name);

    return productByName;
}

console.log(findProductByName([{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag"));
console.log(findProductByName([{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "shoe"));
