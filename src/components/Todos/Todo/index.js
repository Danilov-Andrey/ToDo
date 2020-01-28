import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Button } from '../../Add';

const DeleteButton = styled(Button)`
  background-color: #ec9393;
  width: 20px;
  height: 20px;
`;

const Task = styled.li`
  margin: 16px auto 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  word-wrap: break-word;
  text-align: left;
  width: 290px;
  ${props =>
    props.lineThrough &&
    css`
      text-decoration: line-through;
    `}
`;

export function Todo({ task, onDeleteTodo, onCompleteTodo }) {
  return (
    <Task>
      <Text lineThrough={task.completed} onClick={() => onCompleteTodo(task.id)}>
        {task.text}
      </Text>
      <DeleteButton type="button" onClick={() => onDeleteTodo(task.id)}>
        х
      </DeleteButton>
    </Task>
  );
}

Todo.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};
