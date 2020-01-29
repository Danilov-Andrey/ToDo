import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { connect } from 'react-redux';
import { searchTodo } from '../../actions/searchActionCreators';

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
`;

const Search = ({ findTodo }) => {
  const delayedQuery = useRef(_.debounce(value => findTodo(value), 1000))
    .current;
  const search = e => {
    delayedQuery(e.target.value.trim());
  };
  return (
    <Input
      placeholder="Find your favourite todo!"
      onChange={e => search(e)}
      type="text"
    />
  );
};

Search.propTypes = {
  setSearchTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    findTodo: text => {
      dispatch(searchTodo(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
