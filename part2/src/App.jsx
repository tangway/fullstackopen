import { useEffect, useState } from "react";
import Note from "./components/Note";
import axios from "axios";

const App = () => {
  // const [notes, setNotes] = useState(props.notes)
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((res) => {
      console.log("promise fulfilled");
      setNotes(res.data);
    });
  };
  useEffect(hook, []);
  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    axios
      .post("http://localhost:3001/notes", noteObject)
      .then((response) => {
        // console.log(response);
        setNotes(notes.concat(response.data));
        setNewNote("");
    });

  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important == true);

  // const toggleImportanceOf = (note) => {
    
  //   // console.log(note.id)
  //   const url = `http://localhost:3001/notes/${note.id}`
  //   // console.log(url)
  //   const changedNote = { ...note, important: !(note.important) }
  //   // console.log(changedNote)
  //   axios
  //     .put(url, changedNote)
  //     .then(response => {
  //       // console.log(response.data)
  //       setNotes(notes.map(n => {
  //         // console.log(n)
  //         n.id !== note.id ? n : response.data
  //       }))
      
  //     })
  //     .catch(error => {
  //       console.error('Error updating note:', error);
  //     })

  //     // console.log(notes)
  // }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(n => n.id !== id ? n : response.data))
    })
  }

  // console.log(notes)
  return (
    <>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          showing {showAll ? "all" : "important only"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          // console.log(note.id)
          return (
            <Note 
              key={note.id} 
              note={note}
              toggleImportance={()=>toggleImportanceOf(note.id)} />
          )
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default App;
