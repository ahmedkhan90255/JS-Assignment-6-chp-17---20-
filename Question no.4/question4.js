document.write ("<h1> Write a program to print multiplication table of any <br> number using for loop. Table number & length should be <br> taken as an input from user.</h1>")

var userInputTable = prompt ("Enter a number to print it's table")
var userInputTableLength = prompt ("Write a length of the table")

document.write ('<h2> Multiplication Table of ' + userInputTable + '</h2>')
document.write ('<h2> Length ' + userInputTableLength + '</h2>')

for ( i = 1; i <= userInputTableLength; i++) {
    var result = userInputTable * i
    document.write (userInputTable + " x " + i + " = " + result)
    document.write ('<br>')
}
