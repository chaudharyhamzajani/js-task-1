                             //Q1 Declare a variable name & assign the value john Doe
let name = "john Doe";
                             //Q2 Declare a variable age & assign the value 30
let age = 30;
                             //Q3 Declare a variable isStudent & assign the value true
let isStudent = true;
                             //Q4 print these vlaue
console.log(name);
console.log(age);
console.log(isStudent);
                             //Q5 check the typeof objects
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);



                             //task about array
                            //  Q1 create an array hobbies 
const hobbies = ["reading" ,"hiking", "coding" ];
                             //Q2 Print the first element
console.log(hobbies[0]);
                             //Q3 Print the last element
console.log(hobbies[2]);
                             //Q4 Add the value in the last 
hobbies.push("swmmiing");
                             //Q5 Remove the value in the Start
hobbies.shift();
                             //Q6 Print the update array 
console.log(hobbies);
                             //Q7 check the length of array
console.log(hobbies.length);
                                // Q1 about implement the condition if propertie of coding include
                                //  & age is greater then 18 & he's a student then print good deve.
let Age = 20 ;
let isstudent = true ;
if(Age > 18 && isstudent == true && hobbies.includes("coding") ){
    console.log("He is a student of webdevelopment class");
}
else{
    console.log("He is not a student of webdevelopment class");
};


                             //task about object
                             //Q1 create an object called person
 let person = {
    name : "ali",
    age  : 20,
    isStudent : true ,    
};
                             //Q2 Print one by one its key value
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
                             //Q3 add key value in the object
console.log(person.occupation = "developer");
                             //Q4 Print the update object
console.log(person);
                             //Q6 Print the properties of object
console.log(Object.keys(person));  


                            //  task about function
                            // Q1 create a  function name greet                           
function greet(name){
console.log("hello sir", name);
};
                             //Q2 pass the value as parameter and print greeting
console.log(greet("john Doe"));
                             //Q3 create a  function name isAdult & apply the age as parameter the result is true or false 
function isAdult (age){
      if(age>18 ? true : false);
};
console.log(isAdult("20"));






