var num1 = parseInt(prompt("Enter a Number:"));
var num2 = parseInt(prompt("Enter another Number:"));

var add = function(num1, num2) {
	return num1 + num2;
};

alert(add(num1, num2));
confirm("Great, Let's go on to subtraction");
confirm("Are you ready?");

var num1 = parseInt(prompt("Enter a Number:"));
var num2 = parseInt(prompt("Enter another Number:"));
var subtract = function(num1, num2) {
	return num1 - num2;
};

alert(subtract(num1,num2));
confirm("Great, Let's go on to multiplication");
confirm("Are you ready?");

var num1 = parseInt(prompt("Enter a Number:"));
var num2 = parseInt(prompt("Enter another Number:"));

var multiply =function(num1,num2) {
	return num1 * num2;
};
alert(multiply(num1,num2));
confirm("Great, Let's go on to division");
confirm("Are you ready?");

var num1 = parseInt(prompt("Enter a Number:"));
var num2 = parseInt(prompt("Enter another Number:"));

var divide = function(num1,num2) {
	return num1 / num2;
};

alert(divide(num1,num2));
confirm("Great. Thank you for using our calculator!");
