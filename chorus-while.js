// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  } else if (repeat === 9) {
    console.log("Just end it already");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");