/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
var greaterNumber = function(a,b) {
	if(a > b)
		return a;
	else if(a === b)
		return "a Hard Day's Night?";
	else
		return b;
}
console.log(greaterNumber(420,69));
/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
var stringOfNumbers = function(one_parameter) {
  var string = "";
  for(var i=0; i < one_parameter; i++) {
    string += i;
  }
  return string;
}
console.log(stringOfNumbers(10));
/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */
var sumOfArray = function(the_array) {
  var num = 0;
  the_array.forEach(function(app){
	  if(app === parseInt(app,10)) //note: 10 means the base
		  num += app;
  })
  return num;
}
console.log(sumOfArray([2,4,6,8,'intermission',11,13]));
/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
var getEvens = function(array) {
  return array.map(function(poi){
    if(poi % 2 === 0)
      return poi;
    else 
      return null;
  });
}
console.log(getEvens([1,3,6,2,9,13]));
/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
var getOdds = function(array) {
  return array.map(function(poi){
    if(poi % 2 !== 0)
      return poi;
    else 
      return null;
  });
}
console.log(getOdds([1,3,5,7,9,13,2,4,6]));
/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */

 var calculate = function(a,b,c) {
	 switch(c) {
		 case 'add':
			return a+b;
		 break;
		 
		 case 'subtract':
			return a-b;
		 break;
		 
		 case 'multiply':
			return a * b;
		 break;
		 
		 case 'divide':
			return a/b;
		 break;
		 
		 default:
			return 'Invalid operator';
	 }
 }
 
 console.log(calculate(69,420,'add'));
 
 
 
 
 
 //better copy; magic in its purest form
 /*
   ,--. 
   ([ oo] 
    `- ^\
  _  I`-'
,o(`-V' 
|( `-H-'
|(`--A-'
|(`-/_\'\
O `'I ``\\ 
(\  I    |\,
 \\-T-"`, |H   Ojo 
*/
 var calculator = (x,y,z) => { //update: replaced function with arrow to see if it worked 
	
	x = x.toLowerCase(); // lower cases x/input
	
	switch(x) {
		case("multiply"): //case for multiply
		case("*"):
		{
			return y * z;
			break;
		}
		
		case("add"): //case for addition
		case("+"):
		{
			return y + z;
			break;
		}
		
		case("subtract"): //case for subtraction 
		case("-"):
		{	return y - z;
			break;
		}
		
		case("divide"): //case for division 
		case("/"):
		{
			return y / z;
			break;
		}
		
		case("power"): //case for power 
		case("**"):
		{
			return Math.pow(y,z);
			break;
		}
		default:
			return "error! run the program again" //defaults to error
	}
	
}
//where the Bus arrives

var array = [];

var inputMolecule = require('readline'); //interface for readable stream; note: require is built in for node to load in molecules, so it will not work for browsers

const calcInput = inputMolecule.createInterface({ //constucts a instance of Writable streams
	input: process.stdin,
	output: process.stdout,
	prompt: '>'
});

calcInput.setPrompt('operator: '); //sets intial prompt when starting
calcInput.prompt(); //prompts 

//bus is here; a.k.a magic
calcInput.on('line', (answer) => { //.on property works as a Eventlistener for this molecule. so whenever 'line'->enter or return key is pressed, the function with the parameter answer which hold the value of line, is executed 
	if(array.length == 0) { //pushes operator input to array
		array.push(answer); // => is equal to function(){} 
		calcInput.setPrompt('Value 1: '); //sets prompts value to enter Value 1
		calcInput.prompt();
	} else if(array.length == 1) {
		array.push(parseInt(answer)); //pushes value 1
		calcInput.setPrompt('Value 2: '); //sets prompts value to enter Value 2
		calcInput.prompt();
	} else if(array.length == 2) {
		array.push(parseInt(answer)); //pushes value 2
		calcInput.setPrompt('Sauce?: ') //sets prompt to sauce
		calcInput.prompt(); 
	} else {
		array.push(answer) 
		console.log("your result is: " + calculator(array[0],array[1],array[2]) + ' with ' + array[3] + ' ounces of ' + '\x1b[31m','Cranberry Sauce'); //returns the calculations
		calcInput.close(); // closes/exits the stream
	}
});