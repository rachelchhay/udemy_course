age = 16;

if (Math.sign(age) === -1) {
  console.log("ERR")
} else if (age === 21) {
  console.log("Happy 21st Bday!!!")
} else if (age % 2 !== 0) {
  console.log("Your age is odd!")
} else if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!")
}

console.log("================================");

// While Loops Practice =======================

// Print all numbers between -10 and 19
let x = -10;
while (x < 20) {
  // console.log(x);
  x+=1;
}

// Print all even numbers between 10 and 40
let y = 10;
while (y < 41) {
  // console.log(y);
  y+=2;
}

// Print all odd numbers between 300 and 333
let z = 301;
while (z < 334) {
  // console.log(z);
  z+=1;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
let w = 5;
while (w < 51) {
  if(w % 5 === 0 && w % 3 === 0) {
    // console.log(w);
  }
  w+=1;
}
