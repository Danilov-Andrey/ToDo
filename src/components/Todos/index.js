import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Todo } from "./Todo"
 
const NoTasks = styled.p`
  margin-bottom: 0; 
`

const Error = styled(NoTasks)`  
`

const Tasks = styled.ul`
  padding: 0;
  width: 80%;
  margin: 0 auto;
`

export const Todos = ({searchTodo, todos}) => {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
     
      if (todos.length === 0) {
        setError("No tasks were found!")
        return
      } 
      if (searchTodo.length === 0) {
        setError(null)
        setTasks(todos)
        return
      }
      const userTask = []
      todos.map(task => {
          if (task.task.toLowerCase().indexOf(searchTodo.toLowerCase()) !== -1){
            userTask.push(task)
          }
          return null
      })
        
      if (userTask.length === 0) {
          setError("Task not found!")
          return
      }
      
      setTasks(userTask)
      setError(null) 
      }, [searchTodo, todos]  
  ) 

  const onDeleteTodo = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const onCompleteTodo = (id) => {
    setTasks(tasks.map(task => setCompleted(task, id)))
  }

  const setCompleted = (task, id) => {
      if (task.id === id){
        task = {...task, completed: !task.completed}
      }
      return task
  }

  let output;
  if (error !== null) {
      output = <Error>{error}</Error>
  } else if (tasks.length === 0) {
      output = <NoTasks>No tasks</NoTasks>
  } else {
    output = 
      <Tasks>
        {tasks.map(task => <Todo task={task} completeTodo={onCompleteTodo} deleteTodo={onDeleteTodo}/>)}
      </Tasks>
  }    
    
  return output
}

Todos.propTypes ={
  searchTodo: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}