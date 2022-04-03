"use strict"; // makes the debugging stiffer and checks for warnings

function firstFunction(argument1,argument2) {
    return argument1+argument2;
}


console.log("Hello World!");
//inline Comment

/*Multi 
Line 
Comment*/

// 1 - Datatype and Variables
//Datatypes: undefined, null, boolean, string, symbol, number and object
var number = 5;
var str = "es ist 20:44 Uhr am 01.04.2022";
// var used in the whole program
let ourName = "Frediii";
//let is only used where it is declared
const pi =3.14;
//Objects.freeze(pi);
// so that an const object can't be changed, only needed for arrays, objects and so on
// const will never change

//Basic Matth in js
var addition = 3+4;
var increment = addition++;
var decrement = addition--;
var remainder = 11%2;
addition *= 3;
addition /=2;

var text = "double \"quoted\" quote ";
console.log(text);
var specialString = `"Moin!" sagte er, 'DÖNER' sagte ich\n new Line`;
console.log(specialString);

var myArray = ["john", 23, true];
myArray.push("Mona Lisa"); // basically like append
myArray.unshift("Kevin Hardt");
console.log(myArray);
//1. Item entfernen: .shift()

console.log(firstFunction("Aa","ron"));


// if
if(pi<1){
    console.log("True");
}else{
    console.log("False");
}

if(pi === "3.14"){ // === ändert die datentypen nicht; strict equality; strict inequality: !==
    console.log("True");
}else if(pi == 3.14){ 
    console.log("wrong data type");
}
else{
    console.log("False");
}
 // val<10 && val>2 LOGISCHES UND; val<10 || val>100 LOGISCHES ODER;

 // switch Statement statt chained else if statements
var  num123=5;
var answer="a";
 switch(num123){
    case 1:
        answer = "Alpha";
        break;
    case 2:
        answer = "Beta";
        break
    case 3:
    case 4:
    case 5:
        answer = "LOL";
        break;
        default:
        answer = "not defined!"
        break;
    }
 console.log(answer);

 //create Objects in js:
 var  myPC = {
     "processor":"ryzen 7 3800x",
     "gpu": "Gtx 1650",
     "case color":"black"
 };

 var mygpu = myPC.gpu;
 var myCaseColor = myPC["case color"];
 console.log(mygpu+", "+myCaseColor);
 myPC["case color"] = "RGB";
 myCaseColor = myPC["case color"];
 console.log(mygpu+", "+myCaseColor);
 
 //add new and delete  Properties with Objects:
 myPC.storageSpace = 1.5
delete myPC["case color"];
if(myPC.hasOwnProperty("case color")){
    console.log("property found");
}
else{
    console.log("property not found");
}
// while and for loops
var array123=[];
var i=0;
while(i<5){
    array123.push(i)
    i++;
} 
/*
do { ... } while(x)
*/
console.log(array123);
array123=[]
for(var i=0;i<3;i++){
    array123.push(i);
}
console.log(array123)

var total=0;
var element = null;
for(element in array123){
    total+=parseInt(element);
    console.log(total);
}

// do while loops first run the code one time and then check for the condition
// return x[k][i] || "not found"; --> will check if a property exists, if not it will output "not found"
//Ternary Operator: condition ? statement-if-true : statement-if-false; 
var number = 0;
console.log(number>0 ? "positive" : number < 0 ? "negative" : "zero")

var magic = function(){
    return 1; 
} // = Anonymous function, can be changed to arrow function
/*
(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
*/

var magic2 = () => 1;

const arrMonths= ["Jan", "Feb", "Mar", "Apr", "May"];
let arr2=[, , ...arrMonths]; //makes a copy of arrMonths without linking them together and skips the first 2 months = Spread operator 
console.log(arr2);
const [z,x, ,y] = [1,2,3,4,5,6];
//sets z to 1, x to 2, and y to 4

var person ={
    "name":"Aaron",
    "age": "17",
    setGear(newGear){
        this.gear = newGear;
    }
};
const greeting = `Hello my Name is ${person.name}. I am ${person.age} years old.`;
console.log(greeting);

class SpaceShuttle{
    constructor(targetPlanet, spaceShipID){
        this.targetPlanet = targetPlanet;
        this._SpaceShipID =spaceShipID; //_varName signals that its a private variable
    }

    get SpaceShipID(){
        return this._SpaceShipID;
    }
    
    set SpaceShipID(UpdatedSpaceShipID){
        this.SpaceShipID = UpdatedSpaceShipID;
    }
}

export const capitalizeString = str => str.toUpperCase();
// or export{capitalizeString}; 
// export const variable1 = "lol"; to export Variables
//export default ... = export fallback