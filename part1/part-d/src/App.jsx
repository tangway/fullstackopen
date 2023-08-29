// import { useState } from "react";

// const App = () => {
//   // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//     allClicksArray: [],
//   });

//   const handleLeftClick = () =>
//     setClicks({
//       ...clicks,
//       left: clicks.left + 1,
//       allClicksArray: clicks.allClicksArray.concat("L"),
//     });
//   const handleRightClick = () =>
//     setClicks({
//       ...clicks,
//       right: clicks.right + 1,
//       allClicksArray: clicks.allClicksArray.concat("R"),
//     });

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//       <br></br>
//       <p>{clicks.allClicksArray.join(" ")}</p>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import PropTypes from "prop-types";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {allClicks.join(" ")}</div>;
};

History.propTypes = {
  allClicks: PropTypes.array.isRequired,
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />

      <p>Total: {total}</p>
    </div>
  );
};

export default App;
