import { combineReducers } from 'redux';

import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    //    contacts.some(
    //   // contacts.find(
    //   contact =>
    //     contact.name.toLowerCase() === name.toLowerCase() ||
    //     contact.number === number,
    // )
    //   ? alert(`${name} is already in contacts.`)
    //   : [...state, payload]);

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
