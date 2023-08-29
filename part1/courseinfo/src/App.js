const Header = (properties) => {
  console.log(properties)
  return <h1>{properties.parts.name}</h1>;
};

const Content = (properties) => {
  // console.log(properties.parts.parts);
  console.log(properties)
  return (
    <>
      <Part
        part={properties.parts.parts[0].name}
        exercise={properties.parts.parts[0].exercises}
      />
      <Part
        part={properties.parts.parts[1].name}
        exercise={properties.parts.parts[1].exercises}
      />
      <Part
        part={properties.parts.parts[2].name}
        exercise={properties.parts.parts[2].exercises}
      />
    </>
  );
};

const Part = (properties) => {
  // console.log(properties)
  return (
    <p>
      {properties.part} {properties.exercise}
    </p>
  );
};

const Total = (properties) => {
  return (
    <h3>
      Total number of exercises:{" "}
      {properties.parts.parts[0].exercises +
        properties.parts.parts[1].exercises +
        properties.parts.parts[2].exercises}
    </h3>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header parts={course} />
      <Content parts={course} />
      <Total parts={course} />
    </>
  );
};

export default App;
