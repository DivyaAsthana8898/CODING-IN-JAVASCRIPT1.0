// let age = prompt("Enter your age: ");
// if(age < 18){
//     console.log("You are a minor.");
// } else {
//     console.log("You are an adult.");

// }

let age  = prompt("Enter a number: ");
age = Number(age);
switch(true){
    case age < 18:
        console.log("you are underage");
        break;
        case age >= 18 && age >= 60:
            console.log("you are an senior citizen plus u can also drive");
            break;
            default:
                console.log("Invalid Input")
}