import { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// const Statistics = ({ stat, value, unit = "" }) => {
//   return <p>{stat}: {value}{unit}</p>
// }

// Statistics.propTypes = {
//   stat: PropTypes.string.isRequired,
//   value: PropTypes.number.isRequired,
//   unit: PropTypes.string,
// }

// const total = good + neutral + bad

const Statistics = ({ good, neutral, bad, all }) => {
  const total = all.length;
  const average = parseFloat(((good - bad) / total).toFixed(1));
  const positive = parseFloat(((good / total) * 100).toFixed(1));

  if (total === 0) {
    return "No feedback given yet";
  }
  return (
    <>
      {/* <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>    
    <p>all: {total}</p> 
    <p>average: {average}</p>
    <p>positive: {positive}%</p> */}

      <br></br>
      <table>
        <tbody>
          <tr>
            <StatisticsLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticsLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticsLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticsLine text="all" value={total} />
          </tr>
          <tr>
            <StatisticsLine text="average" value={average} />
          </tr>
          <tr>
            <StatisticsLine text="positive" value={positive} unit="%" />
          </tr>
        </tbody>
      </table>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  all: PropTypes.array.isRequired,
};

const StatisticsLine = ({ text, value, unit }) => {
  // return <p>{text}: {value}{unit}</p>
  return (
    <>
      <td>{text}</td>
      <td>
        {value}
        {unit}
      </td>
    </>
  );
};

StatisticsLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);

  // const setGoodClick = () => setGood(good + 1);
  // const setNeutralClick = () => setNeutral(neutral + 1);
  // const setBadClick = () => setBad(bad + 1);

  const handleButtonClick = (setter) => {
    setAll(all.concat(1));
    setter((currentValue) => {
      // console.log(`currentValue is: ${currentValue}`);
      return currentValue + 1;
    });
  };

  // const handleButtonClick = (setter) => {
  //   setter((prevCount) => prevCount + 1);
  // };

  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleClick={() => handleButtonClick(setGood)} text="good" />
      <Button
        handleClick={() => handleButtonClick(setNeutral)}
        text="neutral"
      />
      <Button handleClick={() => handleButtonClick(setBad)} text="bad" />
      <h2>Statistics</h2>
      {/* <Statistics stat="good" value={good}/>
      <Statistics stat="neutral" value={neutral}/>
      <Statistics stat="bad" value={bad}/>
      <Statistics stat="all" value={all.length}/>
      <Statistics stat="average" value={(good - bad) / total}/>
      <Statistics stat="positive" value={good / total * 100} unit="%"/> */}
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  );
};

export default App;
