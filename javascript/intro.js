// printing in javascript
console.log("swagat hai aap sabhi ka");

console.log("pepcoders");

// variables in js and data types

let num = 10;//number
console.log(num);

let char='a'; //character
console.log(char);

let str = 'I am string'; // string
console.log(str);

let bool = true; //boolean
console.log(bool);

//loops
for(let i = 1; i<=5; i++){
    console.log(i);
}

// isprime 
let n = 17;
let flag =true;
for(let i = 2; i*i<=n ;i++){
    if(n % i == 0){
        flag = false;
        break;
    }
}
if (flag==true){
    console.log( "prime");
} else {
    console.log( "non-prime");
}