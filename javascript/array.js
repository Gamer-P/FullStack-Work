let ar = [1, 2, 3, 4];
let names = ["raj", "naman"];
let data = [
    {name: "raj", id: 1, address: "up"},
    {name: "ram", id: 2, address: "up"},
    {name: "naman", id: 3, address: "up"}
];

// console.log(ar);
// console.log(ar[3]);
// ar[1] = 99;
// ar[6] = 99
// console.log(ar);
// document.write(ar);

let array = [1, 2, 3, 4];

for(let i in array){
    console.log(i, array[i]);
}
let sum = 0;
for(let i of array){
    console.log(i);
    sum+=i;
}
console.log(i);


// Function-----------
// 1. array.length;
// 2. array.at(index);
console.log(array.at(0)); //print 0 index value, undefined if index not available, -ve index start from backward

// 3. array.concat(array); 
console.log(array.concat([1, 2, 3]));// merge the arrays (merge temporary, not permanent)

// 4. array.indexOf(value);
console.log(array.indexOf(3));// output 2 
//print the index of the value, -1 if not found

// 5. array.includes(value);
console.log(array.includes(3)); 
// output true, check the value is present or not

