let marks = prompt("Enter your marks: ");

if(marks>=100 || marks<0)   console.log("Scammer! call your parent now");
else if(marks>=90)  console.log("You got A, my favourite student");
else if(marks>=75)  console.log("You got B, average wala balak");
else if(marks>=50)  console.log("You got C, bsdk wala backbencher!");
else    console.log("You got D, attempt sucide loser!");



let num = Number(prompt("Enter any number: "))

let diff = num - 13;
if(diff<13) console.log("Double it: " + diff * 2);
else    console.log("As it is: " + diff)


let age = prompt("enter your age: ");

if(age >= 18){
    let isJob = confirm("Are you employeed: ");
    let tax = 0;
    if(isJob){
        let income = prompt("Enter your Income: ");
        if(income>100000){
            tax = income * 0.3;
            console.log("your tax: " + tax);
        }
    } else {
        console.log("You are garbage for our country, by PM Modi");
    }
} else {
    console.log("Why are you here, do study!");
}




