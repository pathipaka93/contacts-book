import { Component } from 'react';
import './App.css';
import CardList  from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';


class App extends Component{
  constructor(){
    super()
    this.state = { 
      contacts : [],
      searchField : ''
    }
  }


  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then ((users)=> this.setState(
      ()=> {
        return {contacts: users}
      }
    ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState( ()=> {
      return {searchField}
    })
  }

  render(){
    const {contacts, searchField} = this.state;
    const {onSearchChange} = this

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
}

export default App;
