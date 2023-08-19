function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}

function productNumber() {
  do {
  productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
}

function productAmount() {
  do {
  productsAmount = parseInt(prompt('Enter products amount:'));
  } while(productsAmount < 1 || isNaN(productsAmount));
}

function finalPrice() {
  if (initialPrice >= startDiscountFrom) {
    const finalPrice = initialPrice * disсountValue;
    console.log('Congrats! You got a discount, the final price is $' + finalPrice);
  }
}