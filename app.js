/*  Arithmetic Operators: for calculation */
let a = 5;
let b = 4;
console.log(`a+b = ${a + b}`);
console.log(`a-b = ${a - b}`);
console.log("a*b = " + a * b);
console.log("a/b = " + a / b);
console.log("a%b = " + a % b);
/* Assignment Operators: For assigning values */
let c = 10;
c += 20; c -= 10; c *= 5; c %= 20;
console.log(c);
/*  Comparison Operators:For comparing  values */
let x = 10;
let y = 10;
console.log(x == y);
console.log(x === y);
let e = 30;
let f = 40;
console.log(f > e);
console.log(f < e);
console.log(f != e);
console.log(f >= e);
console.log(f <= e);
/*  Expressions */
let price = 200;
let quantity = 5;
let totalPrice = price * quantity;
console.log("TotalPrice = " + totalPrice);
let mark1 = 87;
let mark2 = 47
console.log(`Final Score =   ${mark1 + mark2}`);
let comp1 = 10;
let comp2 = "10";
console.log(`10 === "10"`, comp1 === comp2);
console.log(`10 =="10"`, comp1 == comp2);

/*  Logical Operator:  are used to combine two or more conditions and return boolean values. */
/* Logical AND (&&) – Real Example */
let age = 18;
let feePaid = true;
if (age >= 18 && feePaid === true) {
    console.log("Allowed!");
}
else {
    console.log("Not Allowed!");
}
/* Logical OR (||) – Real Example */
let email = true;
let phone = true;
if (email === true || phone === false) {
    console.log("Login Successfully!");
}
else {
    console.log("Something is Wrong!");
}
/*  Logical NOT (!) – Real Example */
let isBlocked = true;
if (isBlocked !== isBlocked) {
    console.log("Access allowed");
}
else {
    console.log("Access denied");
}
/* Combine Logical Operators */
let islogedIn = true;
let isPremium = true;
let hasCoupon = true;
if (islogedIn === true && isPremium === true || hasCoupon === false) {
    console.log("Special Discount!");
}
else {
    console.log("No Discount!");
}
