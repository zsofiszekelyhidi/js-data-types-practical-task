// NUMERIC CONVERSION
console.log("NUMERIC CONVERSION: ");
console.log("---------------------------------------------");
// Number()
console.log("Number('30'): " + Number('30'));
console.log("Number(''): " + Number(''));
console.log("Number(true): " + Number(true));
console.log("Number(false): " + Number(false));
console.log("Number(undefined): " + Number(undefined));
console.log("Number(null): " + Number(null));
console.log("---------------------------------------------");
// +
console.log("+'30': " + +'30');
console.log("+'': " + +'');
console.log("+true: " + +true);
console.log("+false: " + +false);
console.log("+undefined: " + +undefined);
console.log("+null: " + +null);
console.log("---------------------------------------------");
// parseInt() and parseFloat()
console.log("parseInt('100€'): " + parseInt('100€'));
console.log("parseFloat('100.5€'): " + parseFloat('100.5€'));
console.log("---------------------------------------------");

// STRING CONVERSION
console.log("STRING CONVERSION: ");
console.log("---------------------------------------------");
// String() 
console.log("String(30): " + String(30));
console.log("String(true)): " + String(true));
console.log("String(false)): " + String(false));
console.log("String(undefined)): " + String(undefined));
console.log("String(null)): " + String(null));
console.log("---------------------------------------------");
// toString()
console.log("30..toString(): " + 30..toString());
console.log("true.toString(): " + true.toString());
console.log("false.toString(): " + false.toString());
console.log("---------------------------------------------");

// BOOLEAN CONVERSION
console.log("BOOLEAN CONVERSION: ");
console.log("---------------------------------------------");
// values become true
console.log("Boolean('string'): " + Boolean("string"));
console.log("Boolean(12): " + Boolean(12));
console.log("Boolean('0'): " + Boolean('0'));
// values become false
console.log("Boolean(''): " + Boolean(""));
console.log("Boolean(0): " + Boolean(0));
console.log("Boolean(NaN): " + Boolean(NaN));
console.log("Boolean(undefined): " + Boolean(undefined));
console.log("Boolean(null): " + Boolean(null));