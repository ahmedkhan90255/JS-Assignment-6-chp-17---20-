document.write(
  "<h1> You have an array <br> A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] <br> Write a program to enable “search by user input” in an array.<br> After searching, prompt the user whether the given item is <br> found in the list or not.</h1>"
);

var foodItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the food item you want");

if (
  userInput === "cake" ||
  userInput === "apple pie" ||
  userInput === "cookie" ||
  userInput === "chips" ||
  userInput === "patties" ||
  userInput === "Cake" ||
  userInput === "Apple pie" ||
  userInput === "Cookie" ||
  userInput === "Chips" ||
  userInput === "Patties"
) {
  alert(userInput + " is available");
} else {
   alert(userInput + " is not available");
}