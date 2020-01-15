import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../../Add'

const DeleteButton = styled(Button)`
  background-color: #ec9393;
  width: 20px;
  height: 20px;
`

const Task = styled.li`
  margin: 16px auto 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-between;  
`

const Text = styled.span`
  word-wrap: break-word;
  text-align: left;
  width: 290px;
  ${props => props.lineThrough && css`
    text-decoration: line-through
  `}
`

export function Todo({task, deleteTodo, completeTodo}){
  return(
    <Task>
      <Text lineThrough={task.completed} onClick={() => completeTodo(task.id)}>
        {task.task} 
      </Text>
      <DeleteButton type="button" onClick={() => deleteTodo(task.id)}>х</DeleteButton>
    </Task>
  )
}