const mobile = [
    {name:'Samsung', price:50000, camera:'64MP',battery:'5000mAh'},
    {name:'Xaomi', price:25000, camera:'64MP',battery:'5000mAh'},
    {name:'oppo', price:20000, camera:'64MP',battery:'5000mAh'},
    {name:'iPhone', price:125000, camera:'64MP',battery:'5000mAh'},
    {name:'vivo', price:16000, camera:'64MP',battery:'5000mAh'},
];
function minPrice(phones){
    // console.log(phones);
    let min = phones[0];
    for(phone of phones){
        // console.log(phone);
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const product = minPrice(mobile);
 console.log(product);