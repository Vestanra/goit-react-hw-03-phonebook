import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyle";
import {Layout} from "./Layout.styled"

export class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.setState(({contacts}) => {
      const check = contacts.some(el => el.name === newContact.name);
      if (check){
      alert(`${newContact.name} is already in contacts.`);
       return
      }
      return ({
      contacts:[...contacts, {...newContact, id: nanoid()}]
    })})
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id)
    }))
  };

  changeFilter = name => this.setState({
      filter: name,
    })
 
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({name}) =>
      name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const {filterContacts, addContact, changeFilter, deleteContact} = this;
    const filterList = filterContacts();
    
    return (<Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <Filter onChange = {changeFilter} />
      <h2>Contacts</h2>
      <ContactList list={filterList} onDelete={deleteContact} />
      <GlobalStyle/>
    </Layout>)
  };
};
