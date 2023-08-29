import { useState } from "react";

const Hello = ({ name, age, lastname }) => {
  // console.log(properties)
  // const name = properties.name
  // const age = properties.age
  // const lastname = properties.lastname

  // destructuring the properties object into respective variables
  // const { name, age, lastname } = properties

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name} {lastname}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Display = ({ counter }) => <div>Counter: {counter}</div>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
  // console.log(`Hello from da component world!`)

  const now = new Date();
  const a = 34;
  const b = 50;
  // console.log(now, a+b)

  const name = "Peter";
  const age = 10;

  // const {counter} = props

  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  console.log(`rendering... ${counter}`);

  return (
    <>
      <p>Hello, the time is now:- {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b} exactly yoo
      </p>
      {/* <Hello name='Aloha' lastname='Lastname' age={a+b}/> */}

      <Hello name={name} lastname="Petrovich" age={age} />
      <br></br>
      {/* <div>Counter: {counter}</div> */}

      <Display counter={counter} />

      <Button handleClick={increaseByOne} text="++ CLICKA" />

      <Button handleClick={decreaseByOne} text="-- CLICKA" />

      <Button handleClick={setToZero} text="RESETTA" />
    </>
  );
};

export default App;
