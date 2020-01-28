import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Todo } from './Todo';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from '../../actions/actionCreators';

const NoTasks = styled.p`
  margin-bottom: 0;
`;

const Error = styled(NoTasks)``;

const Tasks = styled.ul`
  padding: 0;
  width: 80%;
  margin: 0 auto;
`;

const Todos = ({ todos, onCompleteTodo, onDeleteTodo }) => {
  const [tasks, setCurrentTasks] = useState([]);
  const [error, setError] = useState(null);

  const checkAnyTodos = () => {
    if (todos.length === 0) {
      setError('No tasks were found!');
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    checkAnyTodos();
  }, [checkAnyTodos, todos]);

  let output;
  if (error !== null) {
    output = <Error>{error}</Error>;
  } else if (todos.length === 0) {
    output = <NoTasks>No tasks</NoTasks>;
  } else {
    output = (
      <Tasks>
        {todos.map(task => (
          <Todo
            key={task.id}
            task={task}
            onCompleteTodo={onCompleteTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </Tasks>
    );
  }

  return output;
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  onCompleteTodo: id => dispatch(completeTodo(id)),
  onDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
