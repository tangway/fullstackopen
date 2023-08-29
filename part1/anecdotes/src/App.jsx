import PropTypes from "prop-types"
import { useState } from "react";
import { createLogger } from "vite";

const MostVotes = ({ votes, anecdotes }) => {
  if (Math.max(...votes) === 0) {
    return <p>no votes in yet mi amiigooo</p>
  }
  const maxVotes = Math.max(...votes)
  const indexOfMaxVotes =  votes.indexOf(maxVotes)
  return (
    <>
      {anecdotes[indexOfMaxVotes]}
      <p>has {maxVotes} votes</p>
    </>
  )
}

MostVotes.propTypes = {
  anecdotes: PropTypes.array,
  votes: PropTypes.array
}


const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));

  const voterFunc = (selected) => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  const setSelectedFunc = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  };

  
  return (
    <>
      <h2>Anecdote of the Day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p>
        <button onClick={() => voterFunc(selected)}>vote</button>
        <button onClick={setSelectedFunc}>next quote</button>
      </p>
      <h2>Anecdote with most votes</h2>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
