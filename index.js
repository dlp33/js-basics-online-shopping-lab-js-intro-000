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
var itemArray = [];
  cart.forEach(function(value, index, array) {
   var key = Object.keys(array[index]);
   var price = array[index][key];
	 itemArray[index] = `${key} at $${price}`;
});

  if(cart.length < 1) {
    console.log('Your shopping cart is empty.');
  }

  if (cart.length === 1) {
    var item1 = itemArray[0];
    console.log(`In your cart, you have ${item1}.`);
  }

  if (cart.length === 2) {
    var item1 = itemArray[0];
    var item2 = itemArray[1];
    console.log(`In your cart, you have ${item1}, and ${item2}.`);
  }

  if (cart.length === 3) {
    var item1 = itemArray[0];
    var item2 = itemArray[1];
    var item3 = itemArray[1];
    console.log(`In your cart, you have ${item1}, ${item2}, and ${item3}.`);
  }
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
