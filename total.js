const products = [
    {name:'Shampoo', price:50},
    {name:'shop', price:250},
    {name:'makeup', price:800},
];
function getTotalCost(products){
    let total =0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const totalCost = getTotalCost(products);
console.log(totalCost);
