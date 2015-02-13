// var states = ["New Jersey","Maine", "Pennsylvania", "California", "Illinois", "Oregon", "Texas", "Tennessee", "Arizona", "Wyoming", "Montana", "South Dakota", "North Dakota", "Maryland", "Vermont", "New York", "Delaware", "Florida", "North Carolina", "Arkansas",];

// //print array
// alert(states); 
// states.sort();
// alert(states);

// //print messages
// alert("I have been to" + " " + states.length + " " + "states.");
// alert("The second state in my array is" + " " + states[1]);
// alert("The first two states I have been to are " + " " + states[1] + " " + "and" + " " + states[2]);

// states.push("New Mexico");
// states.sort();
// states.reverse();

// alert(states);

// var toTheSecondPower = function(number) {
// 	var result = number * number;
// 	return(result);
// }

// alert(toTheSecondPower(10));

// var printThePower = function(number) {
// 	alert(toTheSecondPower(number));
// }

// printThePower(2);

// //general variable stuff
// var color;
// color = "ORANGE";
// alert(color);

// //working with numbers
// var numOfUsers = 30;
// alert(numOfUsers);
// numOfUsers +=5;
// alert(numOfUsers)

// //working with text
// var storeName = "Walmart";
// var companyTitle = storeName + " LLC";
// var companyTitleUpperCase 
// alert(companyTitle.toLowerCase());

// //working with arrays
// var fruits = ["orange", "plum", "apple", "watermelon", "pineapple"];
// alert(fruits[fruits.length-1]);

// working with functions
// var numOfWidgets = 3;
// alert(numOfWidgets);

// var toTheSecondPower = function(num) {
// 	//return(num * num);
// }

// var value = toTheSecondPower(numOfWidgets);
// alert(value);

// var capitalize = function(text) {
// 	var firstLetter = text.substr(0,1).toUpperCase();
// 	var restOfText = text.substr(1, text.length-1);

// 	return(firstLetter + restOfText);
// }

// var capVersion = capitalize("joe");
// alert(capitalize("four score and seven years ago..."));


// //working with clickevents
// var clickEvent = function() {
// 	document.getElementById('header').innerHTML = document.getElementById('name').value;
// }

//Basic function with alert message
var helloWorld = function() {
	alert("Hello World!");
}

helloWorld();

//function with parameter and return
var halfTheNumber = function(num) {
	return(num/2);
}

alert(halfTheNumber(100));

//reverse sort
var reverseSORT = function(arr) {
	return(arr.sort().reverse());
}

alert(reverseSORT( ["Joe", "Peggy", "Stephen", "mike"]));


//click event from form submissions
var displayName = function() {
	alert("My name is" + " " + document.getElementById('firstname').value + " " + document.getElementById('lastname').value + " " + "and I am " + document.getElementById('age').value + "" + " years old.");
}








