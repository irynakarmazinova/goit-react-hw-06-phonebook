import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './contacts-actions';
// import { addContactFn } from '../../utils/add-contact';

const items = createReducer([], {
  // [addContact]: (state, { payload }) => addContactFn(state, payload),
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({ items });
