import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Total from './Total';
import { Todo } from './Todo';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from '../../actions/todoActionCreators';

const NoTasks = styled.p`
  margin-bottom: 0;
`;

const Error = styled(NoTasks)``;

const Tasks = styled.ul`
  padding: 0;
  width: 80%;
  margin: 0 auto;
`;

const Todos = ({
  todos,
  searchTodo,
  onCompleteTodo,
  onDeleteTodo,
  searchError
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (todos.length === 0 && searchTodo.length === 0) {
      setError('No tasks were found!');
    } else {
      setError(null);
    }
  }, [searchTodo, todos]);

  let output;
  if (error !== null || searchError !== null) {
    output = <Error>{error || searchError}</Error>;
  } else {
    const renderedTodo = searchTodo.length === 0 ? todos : searchTodo;
    output = (
      <Tasks>
        {renderedTodo.map(task => (
          <Todo
            key={task.id}
            task={task}
            onCompleteTodo={onCompleteTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
        <Total />
      </Tasks>
    );
  }

  return output;
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = ({ appTodos, searchTodo }) => {
  return {
    todos: appTodos.todos,
    searchTodo: searchTodo.todo,
    searchError: searchTodo.searchError
  };
};

const mapDispatchToProps = dispatch => ({
  onCompleteTodo: id => dispatch(completeTodo(id)),
  onDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
