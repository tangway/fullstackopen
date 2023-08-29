import PropTypes from "prop-types";
import Note from './components/Note'




const App = ({ notes }) => {

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </>
  );
};

App.propTypes = {
  notes: PropTypes.any,
};



export default App;
