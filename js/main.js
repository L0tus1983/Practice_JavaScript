function Person(firstName, lastName, age, gender, interest) {
  this.name = {
    firstName: firstName,
    lastName: lastName
  };
  this.age = age;
  this.gender = gender;
  this.interest = interest;
  //   console.log(this.gender);
  this.bio = function() {
    var str =
      this.name.firstName +
      " " +
      this.name.lastName +
      " is " +
      this.age +
      " years old.";
    if (gender === "male") str += " He likes ";
    else if (gender === "female") str += " She likes ";
    else str += " It likes ";
    var interests = interest.length;
    switch (interests) {
      case 1:
        str += this.interest[0];
        break;
      case 2:
        str += this.interest[0] + " and " + this.interest[1];
        break;
      default:
        str += "much more";
        break;
    }
    str += ".";
    alert(str);

    // alert(
    //   this.name.firstName +
    //     " " +
    //     this.name.lastName +
    //     " is " +
    //     this.age +
    //     " years old. He likes " +
    //     this.interest[0] +
    //     " and " +
    //     this.interest[1] +
    //     "."
    // );
  };
  Person.prototype.greeting = function() {
    alert("Hi! I'm " + this.name.firstName + ".");
  };
}

var person1 = new Person("Bob", "Smith", 32, "male", [
  "music",
  "skiing",
  "Battle"
]);
console.log(person1["age"]);
console.log(person1.interest[1]);
console.log(person1.gender);
console.log(person1.bio());
