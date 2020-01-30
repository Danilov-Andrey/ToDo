import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActionCreators';

const Form = styled.form`
  width: 80%;
  display: flex;
  margin: 16px auto 0 auto;
`;

const Input = styled.input`
  width: 80%;
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const Button = styled.button`
  margin-left: 10px;
  width: 20%;
  border-radius: 5px;
  border: 0;
  background-color: #efd2bc;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    background-color: #f9e5d5;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #b3aaa3;
      &:hover {
        background-color: #b3aaa3;
      }
    `}
`;

const Error = styled.p`
  margin-bottom: 0;
`;

const Add = ({ onAddTodo, searchMode }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState(null);

  const onAdd = e => {
    e.preventDefault();
    if (task.trim().length > 5) {
      onAddTodo(task.trim());
      setTask('');
    } else {
      setError('At least 5 symbols');
    }
  };

  const userTask = e => {
    if (e.target.value.length > 5) {
      setTask(e.target.value);
      setError(null);
    } else {
      setTask(e.target.value);
      setError('At least 5 symbols');
    }
  };

  return (
    <>
      <Form onSubmit={e => onAdd(e)}>
        <Input
          disabled={searchMode}
          type="text"
          value={task}
          placeholder="Enter your important task!"
          onChange={e => userTask(e)}
        />
        <Button disabled={searchMode} type="submit">
          Add
        </Button>
      </Form>
      {error ? <Error>{error}</Error> : null}
    </>
  );
};

Add.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  searchMode: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: text => {
      dispatch(addTodo(text));
    }
  };
};

const mapStateToProps = ({ searchTodo }) => {
  return {
    searchMode: searchTodo.searchMode
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
