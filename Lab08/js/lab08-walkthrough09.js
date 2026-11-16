// Exercise 8.9 – Functions as objects
var isCanadian = true;
function calculateTax(amount, taxFunction) {
    return amount * taxFunction();
}
function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        return isCanadian ? 0.05 : 0.0;
    });
}
