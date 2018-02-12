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
    var item3 = itemArray[2];
    console.log(`In your cart, you have ${item1}, ${item2}, and ${item3}.`);
  }
}

function total() {
  var total = 0;
  cart.forEach(function(value, index, array) {
   var key = Object.keys(array[index]);
   var price = array[index][key];
   total += price;
});

return total;

}

function removeFromCart(item) {
  var beforeLength = cart.length;
  cart.forEach(function(value, index, array) {
    if(cart[index].hasOwnProperty(item)){
      cart.splice(index, 1);
    }
  });

  var afterLength = cart.length;

  if(afterLength === beforeLength) {
    console.log('That item is not in your cart.');
    return cart;
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(arguments.length) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
