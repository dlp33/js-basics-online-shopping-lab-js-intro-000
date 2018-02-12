var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({[item]: Math.floor(Math.random() * 100)});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (!cart.length) {
    return `Your shopping cart is empty.`;
  }

  for(var i = 0; i < cart.length; i++) {
    console.log(cart[i][item]);
  }
  // In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
