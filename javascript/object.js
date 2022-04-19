//empty object
let obj = {};
console.log(obj);

let objAkash = {
    Name: "Akash",
    age : 23,
    phoneno : 9060642684,
    Lastname : "upadhyay"
};
console.log(objAkash);

let  capAmerica = {
    Name: "steve",
    age: 9999,
    Friends: ['natasha', 'thor', 'tony', 'bucky'],
    address: {
        city: "queens",
        state: "haryana"
    },
    sayHello : function(){
        console.log("cap america says hiiii")
    }
}

// console.log(capAmerica);


//name of captain america
console.log(capAmerica.Name);

// age of captain america
console.log(capAmerica.age);

// friends of captain america
console.log(capAmerica.Friends);

// address
console.log(capAmerica.address);
// city

console.log(capAmerica.address.city);

// array
console.log(capAmerica.Friends[2]);

// functions
capAmerica.sayHello();

//  add a new  key to object

capAmerica.Movies =['avengers','civil war', 'end game'];

// delete a key 
delete capAmerica.Movies;

// true and false //changing words
capAmerica.isAvenger = true;
capAmerica.isAvenger = false;

capAmerica.address.state = 'NEW YORK';
console.log(capAmerica);

// second method to access a key

console.log(capAmerica.Name);
console.log(capAmerica['Name']);