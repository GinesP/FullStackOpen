import { useEffect, useState } from 'react'
import phoneService from './services/persons';



const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = ({ addName: onSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        phone: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" >add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, handleDeletePerson }) => {
  return (
    <div>
      {persons.map(person => <div key={person.name}>{person.name} {person.number} <button id={person.id} onClick={handleDeletePerson}>delete</button></div>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    phoneService.getAll()
      .then(
        response => {
          console.log('promise fulfilled')
          setPersons(response)
        }
      )

  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!persons.every(person => person.name !== newName)) {
      // alert(`${newName} is already added to phonebook`)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        phoneService.update(person.id, { name: newName, number: newNumber })
          .then(response => {
            setPersons(persons.map(p => p.id !== person.id ? p : response))
          })
          .catch(error => console.log(error))


      }
      return
    }
    phoneService.create({ name: newName, number: newNumber })
      .then(response => setPersons(persons.concat(response)))
      .catch(error => console.log(error))
    // setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleDeletePerson = (e) => {
    const id = e.target.id
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneService.deletePerson(id)
        .then(response => {
          console.log(response)
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => console.log(error))
    }
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <br />
      <PersonForm
        addName={onSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App