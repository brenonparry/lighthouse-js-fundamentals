const chorus = "Let's dance!";
for (let repeat = 0; repeat < 9; repeat++) {
  if (repeat === 4) {
    console.log("Key Change!")
  }
  else if (repeat === 8) {
    console.log("Last time")
  }
  for (let backup = 2; backup < 9; backup*=2) {
    console.log("Ooh baby lets dance")
  }
  console.log(chorus);
}
console.log("Until the sun comes up!");