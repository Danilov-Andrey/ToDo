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

export const Todos = ({searchInputTodo, todos, setRootTodos}) => {
  const [tasks, setCurrentTasks] = useState([])
  const [error, setError] = useState(null)
  
  useEffect(() => {
      if (checkAnyTodos()){
        if (checkUserInputLength()){
            searchTodo()
        }
      }    
    }, [searchInputTodo, todos]  
  ) 
  
  const checkAnyTodos = () => {
    if (todos.length === 0) {
        setError("No tasks were found!")
        return false
    } 
    return true
  }
  
  const checkUserInputLength = () => {
    if (searchInputTodo.length === 0) {
        setError(null)
        setCurrentTasks(todos)
        return false
    }
    return true
  }

  const checkTodoAvailability = (userTask) => {
    if (userTask.length === 0) {
        setError("Task not found!")
        return false
    }
    updateTodos(userTask)
  }

  const searchTodo = () => {
    const userTask = []
    todos.map(task => {
      if (task.task.toLowerCase().indexOf(searchInputTodo.toLowerCase()) !== -1){
          userTask.push(task)
      }
      return null
    })
    checkTodoAvailability(userTask)
  }

  const updateTodos = (userTask) => {
    setCurrentTasks(userTask)
    setError(null) 
  }

  const filterTodo = (todos, id) => {
    return todos.filter(task => task.id !== id)
  }

  const onDeleteTodo = (id) => {
    if (searchInputTodo.length !== 0){
      setCurrentTasks(filterTodo(tasks, id))
    }
    setRootTodos(filterTodo(todos, id))
  }

  const onCompleteTodo = (id) => {
    if (searchInputTodo.length !== 0){
      setCurrentTasks(tasks.map(task => setCompleted(task, id)))
    }
    setRootTodos(todos.map(task => setCompleted(task, id)))
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
        {tasks.map(task => <Todo key={task.id} task={task} completeTodo={onCompleteTodo} deleteTodo={onDeleteTodo}/>)}
      </Tasks>
  }    
    
  return output
}

Todos.propTypes ={
  searchInputTodo: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  setRootTodos: PropTypes.func.isRequired
}