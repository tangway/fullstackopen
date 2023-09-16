import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

// import axios from "axios";

// axios
//   .get("http://localhost:3001/notes")
//   .then((response) => {
//     const notes = response.data;
//     console.log(notes);

//     ReactDOM.createRoot(document.querySelector("#root")).render(
//       <App notes={notes} />
//     );
// });

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
//   {
//     id: 4,
//     content: "More test issues",
//     important: false,
//   },
//   {
//     id: 5,
//     content: "More test issues...",
//     important: true,
//   },
// ];

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
