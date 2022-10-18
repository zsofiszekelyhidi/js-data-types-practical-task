// string + boolean
let sum = "4" + true; 
console.log("'4' + true becomes " + sum);

// string + number
sum = '7' + 4  
console.log("'7' + 4 becomes " + sum);

// number + boolean
sum = 6 + true
console.log("6 + true = " + sum);

sum = 6 + false
console.log("6 + false = " + sum);

// string * boolean
let result = "2" * true;
console.log("'2' * true = " + result);

result = "2" * false;
console.log("'2' * false = " + result);

// string * number
result = "2" * 2;
console.log("'2' * 2 = " + result);

// number * boolean
result = 2 * true;  
console.log("2 * true = " + result);

result = 2 * false;  
console.log("2 * false = " + result);

// string / boolean
result = "4" / true;
console.log("'4' / true = " + result);

// string / number
result = "4" / 2;
console.log("'4' / 2 = " + result);

// number / boolean
result = 4 / true;
console.log("4 / true = " + result);

// NUMERIC CONVERSION
console.log("Number('30'): " + Number('30'));
console.log("Number(''): " + Number(''));
console.log("Number(true): " + Number(true));
console.log("Number(false): " + Number(false));
console.log("Number(undefined): " + Number(undefined));
console.log("Number(null): " + Number(null));

console.log("+'30': " + +'30');
console.log("+'': " + +'');
console.log("+true: " + +true);
console.log("+false: " + +false);
console.log("+undefined: " + +undefined);
console.log("+null: " + +null);

console.log("parseInt('100€'): " + parseInt('100€'));
console.log("parseFloat('100.5€'): " + parseFloat('100.5€'));

// STRING CONVERSION
console.log("String(30): " + String(30));
console.log("String(true)): " + String(true));
console.log("String(false)): " + String(false));
console.log("String(undefined)): " + String(undefined));
console.log("String(null)): " + String(null));

console.log("30..toString(): " + 30..toString());
console.log("true.toString(): " + true.toString());
console.log("false.toString(): " + false.toString());

// BOOLEAN CONVERSION
console.log("Boolean('string'): " + Boolean("string"));
console.log("Boolean(12): " + Boolean(12));
console.log("Boolean('0'): " + Boolean('0'));

console.log("Boolean(''): " + Boolean(""));
console.log("Boolean(0): " + Boolean(0));
console.log("Boolean(NaN): " + Boolean(NaN));
console.log("Boolean(undefined): " + Boolean(undefined));
console.log("Boolean(null): " + Boolean(null));