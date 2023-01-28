"use strict";
console.log("-----DATA TYPES--------");
let FirstName = 'string';
let Age = 233;
let States = true;
let Money;
let life = null;
let x = "3232";
let Name;
Name = "Rahul";
//tuple
let Names = ['rahul', 23, true, null, undefined];
console.log(Names);
//union
let Details;
Details = true;
//enum
var list;
(function (list) {
    list[list["one"] = 1] = "one";
    list["two"] = "two";
    list[list["three"] = 3] = "three";
})(list || (list = {}));
console.log('list', list, list[1]);
console.log({ Name, FirstName, Age, States, Money, life, x });
console.log("---------FUNCTION------------");
function Data(id) {
    void console.log(id);
}
Data('rahul');
const Lists = {
    id: 33,
    name: 'name'
};
console.log('Type-lists', Lists);
console.log('-------INTERFACE--------');
const inter = {
    name: "rahul",
    age: 23
};
const subInter = {
    name: "mithun",
    age: 22
};
console.log({ inter, subInter });
console.log('-------ASSERTION--------');
let ass = true;
let ass1 = ass;
console.log(typeof ass, ass1);
console.log('-------CLASS--------');
class Human {
    constructor(Name, Age) {
        this.Name = Name,
            this.Age = Age;
    }
}
let data1 = new Human("rahul", 23);
let data2 = new Human("mithun", 23);
console.log({ data1, data2 });
