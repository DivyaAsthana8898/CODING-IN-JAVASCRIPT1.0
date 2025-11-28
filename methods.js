// let num = [10, 20, 30, 40, 50];
// let b = num.toString();
// let c = num.join(" and ");
// console.log(typeof b);
// console.log(c);

// let marks = [67,78,98,12,34,35,56,57];
// marks.splice(2,3,22,56,89);
// console.log(marks);

//USING FILTER METHOD 
let marks = [67,78,98,12,34,35,56,57];
let newmarks = marks.filter((value)=>{
    return value > 50;
})
console.log(newmarks);