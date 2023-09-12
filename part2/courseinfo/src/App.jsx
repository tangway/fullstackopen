// import PropTypes from "prop-types";
import Course from './components/Course'

// current state of file is when i had just finished exercise 2.4

// go for Simplicity
// write working code first, can always fix later
// note the steps so i can write an article on it

// consider whether course->header and content->part should be separate 
// hierachies or under 1 big umbrella of passing props

// Course would need to render n number of headers
// can Course render the header AND pass down props? -it should be able to do so
// before the return statement..




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
