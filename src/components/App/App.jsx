import css from './App.module.css'
import { useState, useId, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'

export default function App() {

  const initialContacts = JSON.parse(window.localStorage.getItem("saved-contacts")) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  });

  const [filterForContacts, setFfilterForContacts] = useState("");

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterForContacts.toLowerCase()));
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => { return prevContacts.filter((contact) => contact.id !== contactId) })
  }

  return (
    <div className={css.phonebookContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox value={filterForContacts} onChange={setFfilterForContacts} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}


