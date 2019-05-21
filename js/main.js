function say(greetings, honorifcs) {
  console.log(greetings + " " + honorifcs + this.name);
}

var tom = { name: "Tom Sawuer" };
var becky = { name: "Becky Thatcher" };
say.apply(tom, ["Hello!", "Mr."]);
say.apply(becky, ["Hi!", "Ms."]);
say.call(tom, "Hello", "Mr");
say.call(becky, "Hi!", "Ms");
