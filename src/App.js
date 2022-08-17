import { useState, useEffect } from 'react';
import './App.css';
import CardList  from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {

  const [searchField, setsearchField] = useState('')
  const [contacts, setContacts] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString)
  }


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=>setContacts(users))
  }, [])

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className='App'>
      <h2 className='app-title'>Contacts List</h2>
      <SearchBox 
        onChangeHandler = {onSearchChange}
        placeholder = "Search contacts"
        className = "search-box"
      />
      <CardList contacts={filteredContacts}/>
    </div>
  )
}

export default App;
