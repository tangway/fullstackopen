// const recursion = () => {
//   const factorial = (n) => {
//     if (n === 1) return 1
//     else n * factorial(n-1)
//   }

//   factorial(4)
// }()

const factorial = (n) => {
  if (n === 1) return 1;
  else {
    console.log(`multiplying ${n} * factorial(${n - 1})`);
    return n * factorial(n - 1);
  }
};

// factorial(4)
console.log("🚀 ~ factorial(4):", factorial(4));

const persons = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  { name: "Horatiod Ambivalance", number: "000000000000", id: 5 },
];

const searchTerm = "ma".toLowerCase();
const filtered = persons.filter((p) =>
  p.name.toLowerCase().includes(searchTerm)
);
console.log(filtered);
//
const findPerson = "Arto Hellas"
const filterForID = persons.filter(p => p.name === findPerson)[0].id
console.log(filterForID)