var obj = {
    "Apple": "Steve Jobs",
    "Microsoft": "Bill Gates"
};

// var key = "Apple";
// if (obj.hasOwnProperty(key)) {
//     delete obj[key];
// }
var _obj = obj;
obj["Oracle"] = "Larry Ellison";
console.log(_obj);

Object.freeze(obj);
obj.Apple = "John Sculley";
console.log(obj);

o["function"] = function(){
    console.log("Well done!")
};
o.function();