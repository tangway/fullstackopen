import PropTypes from "prop-types"

const Note = ({ note }) => {
  return <li>{note.content}</li>
}

Note.propTypes = {
  note: PropTypes.shape({
    content: PropTypes.any
  })
}



export default Note