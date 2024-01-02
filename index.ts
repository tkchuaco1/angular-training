import { sumArr } from "./ex1/sum";
import { IPerson, person } from "./ex2/person";
import { getFirstElement } from "./ex3/generic";
import { Color, showColor } from "./ex4/enum";
import { Rectangle } from "./ex5/rect";
import { Test } from "./ex6/decorator";
import { dataProduct, IProduct } from "./ex7/callapi";
import { calculateFactorial, isInteger } from "./ex8/declareFunc";


//ex1 
console.log({ex1: sumArr([1,2,3,4])})
//ex2
const ex2 : IPerson = {
    name: "Dev Test",
    age: 22,
    email: "devtest@gmail.com",
  };
console.log({ex2:person(ex2)})
// ex3
console.log({ex3: getFirstElement([{id: 1, name: 'test1'},{id: 2, name: 'test2'}])})

//ex4
console.log({ex4: showColor(Color.RED)})

//ex5
const ex5 = new Rectangle(4,5)
console.log({ex5: ex5.calculateArea()})
 
//ex6
const ex6 = new Test()
console.log({ex6: ex6.test()})

//ex7
const url: string = "http://localhost:3000";
dataProduct(url)
  .then((data: IProduct[]) => {
    console.log({product: data});
  })
  .catch((error: Error) => {
    console.error("err", error);
});

//ex8
// tinhs giai thua
console.log({'calculateFactorial(3) = ': calculateFactorial(3)})
// check so nguyen
console.log({'3 isInteger?': isInteger(3) ? 'yes' : 'no' })


//ex9 
