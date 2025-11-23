// let number = prompt("Enter a number :");
// number = Number(number);
// if( number % 2 == 0 && number % 3 == 0){
//      console.log("The number is divisible by both 2 and 3");
// }else{
//     console.log("The number is not divisible by both 2 and 3");
// }

let marks = prompt("Enter your marks: ");
marks = Number(marks);
let i = 0;
while(i < 8){
    console.log("right key entered ",i);
    i++;
}

if(i> 9){
    console.log("wrong key entered ", i);
}
