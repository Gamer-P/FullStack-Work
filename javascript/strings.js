let str = "Hello World";
let str2 = 'hello world';

console.log(str);
console.log(str2);
console.log(str.length)

// .at() -> return char/-ve allowed/higher: undefined
// .charAt()-> return char/-ve give nothing/higher: nothing
console.log(str.at(34));//give undefined: when higher index than length
console.log(str.charAt(40));// give nothing/space: when ... and on -ve idx

// .charCodeAt (give ascii)
let a = 'a';
console.log(a.charCodeAt(0)); //give 97(ascii code)

// .indexOf (give index/-1 if not)
console.log(str2.indexOf("el"));//give index of char/str idx of first word
console.log(str2.indexOf('Z')); //give -1 if not available
console.log(str2.indexOf('hl')); //give -1 as 'hl' not there

// .lastIndexOf() -> give last index if word repeat
console.log(str.lastIndexOf("l")); //give last index if more than one char

// .includes() -> true/false
console.log(str.includes("Hello")); //true if string contain that word

// .startsWith() -> true/false
console.log(str.startsWith("Hello")); //true if start with that word/char

// .endsWith() -> true/false
console.log(str.endsWith("World")); //true if end with that word/char

// .concat() -> concat two words/char
console.log(str.concat(" hey")); //concat given word/char with str/char

// .toUpperCase() & .toLowerCase()
console.log(str2.toUpperCase());
console.log(str.toLowerCase());

// .trim() -> remove extra spaces from start & end
let temp = "   Hey Boys   "
console.log(temp.trim());

// .trimStart() -> trim spaces from start
// .trimEnd() -> trim spaces from end
console.log(temp.trimStart());
console.log(temp.trimEnd());

// .padEnd() -> add extra space(default) in end
// .padStart() -> add extra space(default) in start
let data = "hello";
console.log(data.padEnd(7)); // add 2 space in end (total length become 7)
console.log(data.padStart(7)); // add 2 space in start (total length 7)
console.log(data.padEnd(7, "+")); //add 2 + in End
console.log(data.padStart(7, "++")); //add 2 + in Start(7 length total)

// .replace() & .replaceAll()
console.log(data.replace("l", "k")); //replace only first comes char
console.log(data.replaceAll("l", "k")) //replace dups also
console.log(data.replace("llo", "k0")); //replace word also(decrease len)

// .split() -> form an array (string to array conversion)
console.log(data.split('')); //form array of char
let data2 = "he+l+oo+"
console.log(data2.split("+")); //form array of word by a char