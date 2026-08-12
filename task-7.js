const sortByPriceAscending = products => {

    const productsCopy = [...products];

    const ascendingPriceProducts = productsCopy.sort((a, b) => a.price - b.price);

    return ascendingPriceProducts;
}

console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }]));
