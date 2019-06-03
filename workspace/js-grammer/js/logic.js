window.onload = function() {
  let sex = "woman";
  let age = 16;
  outputPrice(age, sex);
};

function outputPrice(age, sex) {
  if (age <= 15) {
    console.log("800 yen");
  } else if (sex === "woman") {
    console.log("1000 yen");
  } else {
    console.log("1800 yen");
  }
}
