// tuple 
let data :[number, boolean, string, number] = [1, true, "Hamza",2];


// Union 
let x : number | string;


// any 
let info : any;

// Enum
enum days {
     Mon = 1,
     Tur = 2,
     Fri = 3, 
     Stu = 4,
}
console.log(days.Mon);


// type 
type  person = {
  name : string;
  age : number;
}
// Object
let Person : {
  name : "Hamza";
  age : 25;
}

// Type Assertion
let y : any = 1;

let a = <number>y;
let b = y as number;


// function 
function getUser(username: string) : string{
  return username;
}

// function getUser(username: string) : void{
//   console.log(username);
// }

// Interface 
interface User{
  id? : number;
  name : string;
  age : number;
  country : string;
}


// Class 
class Car{
  name : string;
  module : string;
  constructor(name: string, module: string){
      this.name = name;
      this.module = module;
  }
  info(){
    console.log(`${this.name}: ${this.module}`);
    
  }
}

// object class 
let car1 = new Car("BMW", "2020")

car1.info();


// Inheritance
class Camion extends Car{
    price : number;
    constructor(name: string, module: string, price: number){
       super(name, module);
       this.price = price;
    }
}

let camion1 = new Camion("Toto","2012",29000)

