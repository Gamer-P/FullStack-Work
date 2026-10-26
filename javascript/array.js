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


// 6. array.join(separator);
console.log(array.join("-")); 
// output 1-2-3-4, join the array with separator


// 7. array.fill(value, start, end);
console.log(array.fill(0, 1, 3)); 
console.log(array.fill(0)); //[0, 0, 0, 0]
// output [1, 0, 0, 4], fill the array with value from start index to end index (not included)


// 8. array.reverse();
console.log(array.reverse()); 
// permanent change the array
// output [4, 3, 2, 1], reverse the array


// 9. array.sort();
let numArray = [4, 53, 43, 23, 87, 88, 3];
console.log(numArray.sort());
// output [3, 23, 43, 53, 87, 88], sort the array in ascending order with start numeric value, but not work with string value, for string value it sort in alphabetical order
console.log(numArray.sort((a, b) => b - a));
// output [88, 87, 53, 43, 23, 3], sort the array in descending order 
// a - b -> ascending order
// b - a -> descending order

console.log(array.sort());
// output [1, 2, 3, 4], sort the array in ascending order
let str = ["raj", "naman", "ram"];
console.log(str.sort()); 
// output ["naman", "raj", "ram"], sort the array in ascending order


// 10. array.slice(start, end);
console.log(array.slice(1, 3)); 
// output [2, 3], slice the array from start index to end index (not included)


// 11. delete array[1]; // delete the value from array, but not change the length of the array (fill it by 'empty' value)


// 12. array.push(value); // add the value at the end of the array
array.push(5, 5, 6);
//output [1, 2, 3, 4, 5, 5, 6], add the value at the end of the array (permanent change the array)


// 13. array.pop(); // remove the value from the end of the array
array.pop();
//output [1, 2, 3, 4, 5, 5], remove the value from the end of the array


// 14. array.shift(); // remove the value from the start of the array
array.shift();
//output [2, 3, 4, 5, 5], remove the value from the start of the array(permanent change the array)


// 15. array.unshift(value); // add the value at the start of the array
array.unshift(1, 1);
//output [1, 1, 2, 3, 4, 5, 5], add the value at the start of the array(permanent change the array)