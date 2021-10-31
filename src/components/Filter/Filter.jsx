import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import contactActions from 'redux/contacts/contacts-actions';

import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      className={s.input}
    ></input>
  </label>
);

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) =>
    dispatch(contactActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
