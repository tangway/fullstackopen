import PropTypes from "prop-types";

// current state of file is when i had just finished exercise 2.4

// go for Simplicity
// write working code first, can always fix later
// note the steps so i can write an article on it

// consider whether course->header and content->part should be separate 
// hierachies or under 1 big umbrella of passing props

// Course would need to render n number of headers
// can Course render the header AND pass down props? -it should be able to do so
// before the return statement..


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

const App = () => {
  // const courses = {
  //   id: 1,
  //   name: "Half Stack application development",
  //   parts: [
  //     {
  //       name: "Fundamentals of React",
  //       exercises: 10,
  //       id: 1,
  //     },
  //     {
  //       name: "Using props to pass data",
  //       exercises: 7,
  //       id: 2,
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 14,
  //       id: 3,
  //     },
  //     {
  //       name: "Redux",
  //       exercises: 11,
  //       id: 4,
  //     },
  //   ],
  // };

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Course courses={courses} />
      {/* <Content parts={parts} /> */}
      {/* <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
    </div>
  );
};

export default App;
