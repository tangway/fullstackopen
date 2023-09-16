  // exercise 2.6
  // add newName to persons array
  // construct function to add new person object to persons array

  // exercise 2.7
  // check if newName is already in persons array using .some method
  // if so, display alert written with template literal
  // check if state is correct at each point, duplicates are happening

  // exercise 2.8: add number input and state management
  // DONE add number key to persons array
  // DONE add more persons to starting state
  // DONE add newNumber state
  // DONE add a check to reject empty number input
  // DONE add a check to reject empty name input
  // DONE fix problem of number not appearing

  // exercise 2.9: implement search field that filters
  // DONE add input box for search filter
  // DONE add function to handle onChange
  // the function should use the input to .filter and the right names and
  // associated numbers should show in realtime
  // when search field is clear, it shows every one in persons array
  // when search doesnt have a match it says "no match found"
  // Thinkinggg:
  // persons array rendering is currently done using a straightup map function
  // the search function maybe can trigger a filter within that function when
  // the input field is non-empty?
  // can use conditional rendering for this whole thing
  // use ternary operators for this: check the non-empty condition first, figure
  // out how to filter and show error msg if no results found

  // exercise 2.10: refactor by extracting 3 components
  // DONE refactor search component
  // DONE refactor add new contact component
  // DONE refactor contact rendering component

  // const [persons, setPersons] = useState([
  //   { name: "Arto Hellas", number: "040-123456", id: 1 },
  //   { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  //   { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  //   { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  //   { name: "Horatiod Ambivalance", number: "000000000000", id: 5 },
  // ]);