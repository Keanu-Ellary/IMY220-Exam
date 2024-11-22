//JS tester

var say = function (what) {
	what("say function");
};

var hello = function (who) {
	console.log("Hello", who);
};

say(hello);

var my = function (a, b, c) {
	if (!a) a == 1;
	b = b || 2;
	if (c == undefined) c = 3;
	console.log(a, b, c);
};

my(5, 8, 9, 5, 3, 5, 6);

const arr = [];
arr.push(1);
arr[0] = 5;
arr.push(2);
arr.push(8);

const arr2 = arr
	.map((element, index) => {
		console.log(`Index ${++index} = ${element}`);
        if(Number.isInteger(element))
		return element;
	})
	.reduce((acc, cur) => acc + cur);

var size = arr.length.toFixed(2);

console.log(arr2);
console.log(++size);

//map returns an array
//reduce returns a single number

var cur = "Global";

function doSome()
{
    var cur = "Local";
    console.log(cur);
}

doSome();
console.log(cur);

let list1 = ["Jeff", "Britta", "Abed", "Troy"];

let [first, ...rest] = list1;
rest.map(element => console.log(element));
console.log(first);

let[firstName, second, ...rest1] = list1;
rest1.map(element => console.log(element));