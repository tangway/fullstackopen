import PropTypes from "prop-types";

// working solution to ex 2.3 before data change in 2.4

const Course = ({ course }) => {
  // console.log(course.name)
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
Course.propTypes = {
  course: PropTypes.shape({
    exercises: PropTypes.any,
    name: PropTypes.any,
    parts: PropTypes.any,
  }),
};

const Header = ({ course }) => <h1>{course}</h1>;
Header.propTypes = {
  course: PropTypes.any,
};

const Content = ({ parts }) => (
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

Content.propTypes = {
  parts: PropTypes.any,
};

const Total = ({ parts }) => {
  // console.log(parts);
  const total = parts
    .map((part) => part.exercises) // gets an array of number of exercises
    .reduce((sum, exercise) => sum + exercise); // sums up the array values
  return <p>Total number of exercises: {total}</p>;
};

Total.propTypes = {
  parts: PropTypes.array
}


const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

Part.propTypes = {
  part: PropTypes.shape({
    exercises: PropTypes.any,
    name: PropTypes.any,
  }),
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
      {/* <Content parts={parts} /> */}
      {/* <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
    </div>
  );
};

export default App;
