import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.scss';

export default function App() {
  return (
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

// вызывается-диспачится. диспач вызывает экшены

// добавить лэйзи и статс
// что с локалстор
// нужно ли раздеить сонтактс и фильтр
