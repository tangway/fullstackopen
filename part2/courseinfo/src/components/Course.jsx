import PropTypes from "prop-types";

const Course = ({ courses }) => {
  // use map to render Header components so u get the header names and 
  // also pass the other props?
  
  // console.log(courses)
  return (
    <>
      {courses.map((course)=> <Header course={course} key={course.id} />)}
      {/* <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </>
  );
};
Course.propTypes = {
  course: PropTypes.shape({
    exercises: PropTypes.any,
    name: PropTypes.any,
    parts: PropTypes.any
  }),
  courses: PropTypes.array
}

const Header = ({ course }) => {
  console.log(course)
  const parts = course.parts
  return (
    <>
      <h2>{course.name}</h2>
      {/* {parts.map((p) => {
        // console.log(p)
        return <Part part={p}/>
      })} */}
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
    
  )
}

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
  
  return <h4>Total number of exercises: {total}</h4>;
};

Total.propTypes = {
  parts: PropTypes.array
}


const Part = ({ part }) => (
  <div>
    {part.name}: {part.exercises}
  </div>
);

Part.propTypes = {
  part: PropTypes.shape({
    exercises: PropTypes.any,
    name: PropTypes.any,
  }),
};

export default Course