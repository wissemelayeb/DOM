// Get all elements with class 'quantity'
var quantityElements = document.querySelectorAll('.quantity');
Array.prototype.forEach.call(quantityElements, function(quantityElement) {
 
 // Get the decrease, count, and increase buttons within the current quantity element
var decreaseButton = quantityElement.querySelector('.decrease');
var countElement = quantityElement.querySelector('.count');
var increaseButton = quantityElement.querySelector('.increase');

decreaseButton.addEventListener('click', function() {
var count = Number(countElement.innerText);
if (count > 1) {
 // Decrease the count by 1
count--;
countElement.innerText = count;
updateTotal(quantityElement);
updateCartTotal();
}
});
  
// Add click event listener to the increase button
increaseButton.addEventListener('click', function() {
var count = Number(countElement.innerText);
count++;
countElement.innerText = count;
updateTotal(quantityElement);
updateCartTotal();
});
});

// Get all elements with class 'delete'
var deleteButtons = document.querySelectorAll('.delete');
Array.prototype.forEach.call(deleteButtons, function(deleteButton) {
deleteButton.addEventListener('click', function() {
var parentRow = deleteButton.parentNode.parentNode;
parentRow.parentNode.removeChild(parentRow);
updateCartTotal();
});
});

// Get all elements with class 'like'
var likeButtons = document.querySelectorAll('.like');
Array.prototype.forEach.call(likeButtons, function(likeButton) {
likeButton.addEventListener('click', function() {
likeButton.classList.toggle('active');
});
});

function updateTotal(quantityElement) {
var priceElement = quantityElement.parentNode.parentNode.querySelector('.price');
var price = Number(priceElement.innerText.replace('$', ''));
var countElement = quantityElement.querySelector('.count');
var count = Number(countElement.innerText);
    // Calculate the new total
var total = price * count;
var totalElement = quantityElement.parentNode.parentNode.querySelector('.total');
totalElement.innerText = '$' + total;
}

function updateCartTotal() {
var totalElements = document.querySelectorAll('.total');
var cartTotal = 0;
Array.prototype.forEach.call(totalElements, function(totalElement) {
var total = Number(totalElement.innerText.replace('$', ''));
cartTotal += total;
});
    // Update the cart total element
var cartTotalElement = document.querySelector('#total');
cartTotalElement.innerText = '$' + cartTotal;
}
