document.write("<h1> Generate the following series in your browser. </h1>");

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
var series = [
  "2k ",
  "4k ",
  "6k ",
  "8k ",
  "10k ",
  "12k ",
  "14k ",
  "16k ",
  "18k ",
  " 20k",
];

document.write("<h2> Counting </h2><br>" + "<p>" + counting + "</p>");
document.write(
  "<h2> Reverse Counting </h2><br>" + "<p>" + reverseCounting + "</p>"
);
document.write("<h2> Even </h2><br>" + "<p>" + even + "</p>");
document.write("<h2> Odd </h2><br>" + "<p>" + odd + "</p>");
document.write("<h2> Series </h2><br>" + "<p>" + series + "</p>");
