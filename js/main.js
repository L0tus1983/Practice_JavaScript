function compareFunc(key){
    return function(a, b){
        return a[key] - b[key];
    }
}

var persons = [{name:"Tom", age:17}, {name:"Huck", age:18},{name:"Becky", age:16}];
persons.sort(compareFunc('name'));
console.log(persons);

var a = ["A", "B", "C"];
var b = a.join();
console.log(b);
// 参照渡しコピー（シャローコピー）
var c = a.concat("D",["E",["F", "G"]]);
console.log(c);
 var a = ["A", "B", "C", "D", "E"];
 var b = a.slice(1, 3);
 console.log(b);
 var a = ["A", "B", "C", "C", "E"];
 var c = a.indexOf('C');
var d = a.lastIndexOf('C');
console.log(c);
console.log(d);
console.log(c.toString());
console.log(a.toString());
var  a = [1,2,3,4,5];
var sum = 0;
a.forEach((value) => sum += value);
console.log(sum);
a.forEach((v, i, a) => a[i] = v * v);
console.log(a);
var sq = a.map(Math.sqrt);
console.log(sq);
a = [1,2,3,4,5];
var b = a.map(x => 2 * x);
console.log(b);