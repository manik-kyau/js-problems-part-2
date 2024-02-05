const products = [
    {name:'Shampoo', price:50, quantity:2},
    {name:'shop', price:250, quantity:2},
    {name:'makeup', price:800, quantity:2},
];
function getTotalCost(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
 return total;
}
const totalCost = getTotalCost(products);
console.log('Total cost is = ',totalCost);
