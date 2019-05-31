let user = {
	age: 18,
	younger(otherUser){
		return otherUser.age > this.age;
	}
};

let users = [
	{age:12},
	{age:16},
	{age:32}
];

let youngerUsers = users.filter(user.younger, user);
console.log(youngerUsers.length);