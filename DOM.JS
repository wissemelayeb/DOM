var quantityElements = document.querySelectorAll('.quantity');
Array.prototype.forEach.call(quantityElements, function(quantityElement) {

var decreaseButton = quantityElement.querySelector('.decrease');
var countElement = quantityElement.querySelector('.count');
var increaseButton = quantityElement.querySelector('.increase');

decreaseButton.addEventListener('click', function() {
var count = Number(countElement.innerText);
if (count > 1) {
count--;
countElement.innerText = count;
updateTotal(quantityElement);
updateCartTotal();
}
});

increaseButton.addEventListener('click', function() {
var count = Number(countElement.innerText);
count++;
countElement.innerText = count;
updateTotal(quantityElement);
updateCartTotal();
});
});

var deleteButtons = document.querySelectorAll('.delete');
Array.prototype.forEach.call(deleteButtons, function(deleteButton) {
deleteButton.addEventListener('click', function() {
var parentRow = deleteButton.parentNode.parentNode;
parentRow.parentNode.removeChild(parentRow);
updateCartTotal();
});
});

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
var cartTotalElement = document.querySelector('#total');
cartTotalElement.innerText = '$' + cartTotal;
}