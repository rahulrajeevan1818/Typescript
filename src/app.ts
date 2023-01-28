console.log("-----DATA TYPES--------")
let FirstName:string = 'string'
let Age:number = 233
let States:boolean =true
let Money:undefined
let life:null = null
let x:any = "3232"

let Name:string
Name = "Rahul"
//tuple
let Names:[string,number,boolean,null,undefined] = ['rahul',23,true,null,undefined]
console.log(Names)
//union
let Details:string|boolean
Details = true
//enum
enum list{
    one = 1,
    two = 'two',
    three = 3
}
console.log('list',list,list[1])
console.log({Name,FirstName,Age,States,Money,life,x})

console.log("---------FUNCTION------------")
function Data(id:any) {
    void console.log(id)
}
Data('rahul')

//

type lists = {
    id: number,
    name: string,
}
const Lists:lists = {
    id: 33,
    name: 'name'
}
console.log('Type-lists',Lists)

console.log('-------INTERFACE--------')
interface schema {
    name: string,
    age: number
}
const inter = {
    name: "rahul",
    age: 23
}
const subInter = {
    name: "mithun",
    age: 22
}
console.log({inter,subInter})

console.log('-------ASSERTION--------')
let ass = true
let ass1:number = <number><any>ass
console.log(typeof ass, ass1);
console.log('-------CLASS--------')
class Human {
    Name: string
    Age: number
    constructor(Name:string,Age:number) {
        this.Name = Name,
        this.Age = Age
    }
}
let data1 = new Human("rahul",23)
let data2 = new Human("mithun",23)
console.log({data1,data2})


