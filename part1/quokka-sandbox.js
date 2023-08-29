const destructuring = (() => {
  const t = [1, 2, 3, 4, 5];

  const [first, second, third, ...rest] = t;

  console.log(first, second, third); // 1, 2 is printed
  console.log(rest); // [3, 4, 5] is printed
})();


const prototypalInheritance = (()=>{
  let animal = {
    eats: true,
    walk: () => "animal walk"
  };
  
  animal.__proto__.added = "i was added directly"

  let rabbit = {
    jumps: true,
    __proto__: animal // this sets rabbit to inherit from the animal object
  };
  // rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

  let longEar = {
    earLength: 30,
    __proto__: rabbit
  }

  console.log(rabbit.eats)
  console.log(rabbit.jumps)
  console.log(rabbit.walk())
  console.log(longEar.walk()) // inherited 2 levels down from animal
  console.log(longEar.jumps) // inherited 1 level down from rabbit
  
  console.log(animal.__proto__)
  console.log(rabbit.__proto__)
  console.log(rabbit.added)
  console.log(longEar.added)
  console.log(longEar.__proto__)
})()


// https://javascript.info/prototype-inheritance#searching-algorithm
const protoExercise2 = (()=>{
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  console.log(pockets.pen)
  console.log(bed.glasses)
  console.log(table.money)
  
  // got all questions correct
})()


const objectSpreadSyntax = (() => {
  // only used within an object to clone properties from another object
  
  const obj1 = {
    left: 1,
    right: 1
  }

  const obj2 = {
    ...obj1,
    center: 1,
    right: obj1.right + 1
  }

  const obj3 = {
    ...obj2
  }

  console.log(obj2)
  console.log(obj3)
})()