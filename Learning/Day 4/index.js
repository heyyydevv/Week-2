console.log('Hello, World!');

let a=1;
let b=2;    
let c=3;
let d=4;
console.log(a,b,c,d);

for (let i=0; i<1000; i++) {
    console.log(a+i);
}

let obj={
    name: 'John',
    age: 25,
    isStudent: false
}
for (let key in obj) {
   
        const element = obj[key];
    console.log(key , element);
}
for (const c of "Devraj") {
    console.log(c);
}

while (a<=10) {
    console.log(a);
    a++;
}

let i=10;
do {
    console.log(i);
    i++;
} while (i<6);