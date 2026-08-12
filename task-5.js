const getDiscountedTotalForCategory = (products, category) => {

    const productCategory = products.filter(product => product.category === category );

    const costOfProduct = productCategory.reduce((sum, product) =>{

        const discountedPrice = product.price - (product.price * 0.1);

        const totalCostOfProducts = sum + discountedPrice;
        
        return totalCostOfProducts;

    },0);

    return costOfProduct;
}

console.log(getDiscountedTotalForCategory([{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery"));
