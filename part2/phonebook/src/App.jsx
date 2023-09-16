import { useState, useEffect } from "react";
import myContactService from "./services/contact";
import Notification from "./components/Notification";

const Filter = ({ value, onChange }) => {
  return (
    <>
      search (case insensitive):{" "}
      <input value={value} onChange={onChange} type="text" />
    </>
  );
};

const AddContactForm = ({
  newName,
  handleNameBox,
  newNumber,
  handleNumberBox,
  handleSubmit,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameBox} type="text" />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberBox} type="text" />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

const ContactList = ({ persons, searchTerm, handleDelete }) => {
  return persons
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((p) => (
      <div key={p.id}>
        {p.name}: {p.number}{" "}
        <button onClick={() => handleDelete(p.id, p.name)}>delete</button>
      </div>
    ));
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "")
      return alert(`all input fields must be filled ok?`);

    const newNameObj = {
      name: newName,
      number: newNumber,
    };

    const duplicateExists = persons.some(
      (person) => person.name.toLowerCase() === newNameObj.name.toLowerCase()
    );

    if (duplicateExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const filteredID = persons.filter((p) => p.name === newName)[0].id;
        myContactService
          .update(filteredID, newNameObj)
          .then((replacementObject) => {
            console.log(replacementObject);
            setPersons(
              persons.map((person) => {
                if (person.id !== filteredID) return person;
                else return replacementObject;
              })
            );
          })
          .catch((err) => {
            setNotificationMessage(`${newName} is not in our database. The full error msg is: ${err.message}`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
            myContactService.getAll().then((res) => {
              setPersons(res);
            })
          });
      } 
    } else {
        myContactService
          .create(newNameObj)
          .then((response) => {
            console.log(response)
            setPersons(persons.concat(response))
            setNotificationMessage(`${newName} added to the database`)
            setTimeout(()=>{
              setNotificationMessage(null)
            }, 5000)
          })
          .catch((err) => console.log(err));
      }

      setNewName("");
      setNewNumber("");
    }

  ;

  const handleNameBox = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberBox = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id, name) => {
    if (
      window.confirm(
        `U sure U wan to delete ${name}? dun like this person oredy?`
      )
    ) {
      myContactService
        .deleteEntry(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id))
          setNotificationMessage(`${name} has been deleted from the database :O`)
          setTimeout(()=>{
            setNotificationMessage(null)
          }, 5000)
        });
    }
  };

  // const personsRender = persons.map((person) => (
  //   <div key={person.name}>
  //     {person.name}: {person.number}
  //   </div>
  // ));

  useEffect(() => {
    myContactService.getAll().then((res) => {
      setPersons(res);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <div>
        <Filter value={searchTerm} onChange={handleSearch} />
      </div>
      <h2>Add new contacts</h2>

      <AddContactForm
        newName={newName}
        handleNameBox={handleNameBox}
        newNumber={newNumber}
        handleNumberBox={handleNumberBox}
        handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <ContactList
        persons={persons}
        searchTerm={searchTerm}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
