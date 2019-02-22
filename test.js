function getAverage(a,b){
	
	var average = (a + b) / 2;
	console.log(average);
	return average;
	
}
	
var myResult = getAverage(20,10);	
console.log("the average is " + myResult);

function logResult(){
	
	console.log("the average is " + myResult + " inside the function")
}

logResult();

//var blue = logResult ();

//document.write(blue);

/*function highAverage(c,d,e){
	
	var newAverage = (myResult + c + d + e) / 5;
	console.log (newAverage);
	return newAverage;
	
}

var fiveNumbers = highAverage(10,20,10);

console.log("this average is " + fiveNumbers);

function difference(){
	
	var averageDif = (myResult - fiveNumbers);
	return averageDif;
}

var subtraction = difference();

console.log("the difference is " + subtraction);

document.write("the difference of averages is " + subtraction); */