// let a = 10;
// let b = "10";
// console.log(a==b);
// console.log(a===b);
// console.log(a+5);

//#CONTROL FLOW

// let marks = 75;
// if(marks>=90){
//     console.log("Grade A")
// }
// else if(marks >= 65){
//     console.log("garde B")
// }
// else{
//     console.log("Grade C")
// }
// FOR LOOP
// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// let num = 0;
// while(num<=10){
//     console.log(num);
//     num+=2;
// }

// ARROW FUNCTIONS & DEFAULT PARAMETERS

// const greet = (name = "Guest") => `Hello, ${name}!`;
// console.log(greet("Gauri"));

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map(n=>n*2);
// const even =numbers.filter(n => n%2 ==0);
// const sum = numbers.reduce((total,n)=> total + n,0);

// console.log(doubled);
// console.log(even);
// console.log(sum);

const arr1 =[1,2,3];
        const arr2= [4,5,6];
        const combined = [...arr1,...arr2];
        console.log(combined);

        function sumALL(...nums) {
            return nums.reduce((a,b) => a+b ,0);
        }
        console.log(sumALL(1,2,3,4));