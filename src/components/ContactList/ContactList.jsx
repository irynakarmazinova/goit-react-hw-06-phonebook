import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-actions';
import { getvisibleContacts } from 'redux/contacts/contacts-selectors';

import s from './ContactList.module.scss';

const ContactList = () => {
  const visibleContacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <div className={s.box}>
            <p className={s.name}>{name}: </p>
            <p className={s.number}>{number}</p>
            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              {/* <button className={s.btn} onClick={onDeleteContact}> id={id} */}
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
//   visibleContacts: (items, filter) => {
//     dispatch(getVisibleContacts(items, filter));
//   },
// });

// export default connect(null, mapDispatchToProps)(ContactList);
