const startDiscountFrom = 10000;
const discount = 10;

const disсountValue = (100 - discount) / 100;

showProducts();

productNumber();

productAmount();

// save selected product
const selectedProduct = products[productNumber - 1];

// Calculate initial price without discount
let initialPrice = selectedProduct.price * productsAmount;
console.log('Price: $', initialPrice);

finalPrice()

