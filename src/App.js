import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// import * as actions from './redux/actions';

import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
// import filterContacts from './utils/filter-contact';
import ContactList from './components/ContactList/ContactList';

import './App.scss';

// import classNames from 'classnames';
// удобно для составления динамических классов в компоненте
// classNames(бaзовые классы -'a', 'b', {
// динамические добавить класс, те что зависят от уловия 'c': true / false})

export default function App() {
  // const [contacts, setContacts] = useState(() =>
  //   // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts') ?? []),
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   // if (contacts === '') {
  //   //   // if (!contacts) {
  //   //   return;
  //   // }

  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   contacts.some(
  //     // contacts.find(
  //     contact =>
  //       contact.name.toLowerCase() === name.toLowerCase() ||
  //       contact.number === number,
  //   )
  //     ? alert(`${name} is already in contacts.`)
  //     : setContacts(prevState => [...prevState, contact]);
  // };

  // const handleDeleteContact = id => {
  //   // const handleDeleteContact = ({ target: { id } }) => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  //   // setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  // const handleChangeFilter = ({ currentTarget: { value } }) => {
  //   setFilter(value);
  // };

  // делает видимым тот контакт, который соответствует тексту поиска в инпуте
  // const visibleContacts = () =>
  //   contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
  //       contact.number.includes(filter.trim()),
  //   );

  return (
    // <div className="container">
    //   <h1 className="visually_hidden">Phonebook</h1>

    //   <Title title="Phonebook" />
    //   <ContactForm onSubmit={addContact} />

    //   <Title title="Contacts" />
    //   <Filter value={filter} onChange={handleChangeFilter} />
    //   <ContactList
    //     visibleContacts={visibleContacts()}
    //     onDeleteContact={handleDeleteContact}
    //   />
    // </div>
    <div className="container">
      <h1 className="visually_hidden">Phonebook</h1>

      <Title title="Phonebook" />
      <ContactForm />

      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
// ---------------------------------------------------
// redux toolkit
// react query
// SWR

// добавить лэйзи и статс
// что с локалстор
// нужно ли раздеить сонтактс и фильтр
