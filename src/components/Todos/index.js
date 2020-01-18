import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Todo } from "./Todo"
import { findTask$ } from '../Search'
import { addTask$ } from '../Add'

const NoTasks = styled.p`
  margin-bottom: 0; 
`

const Error = styled(NoTasks)`  
`;

const Tasks = styled.ul`
  padding: 0;
  width: 80%;
  margin: 0 auto;
`

export const Todos = () => {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
      loadTasks()
      const userInputSearch$ = findTask$.subscribe((taskName) => {
        if (taskName.length === 0) {
          loadTasks()
          return
        }
        const tasks = JSON.parse(localStorage.getItem('tasks'))      
        if (tasks === null) {
          setError("No tasks were found!")
          return
        } 
        const userTask = []
        tasks.map(task => {
          if (task.task.toLowerCase().indexOf(taskName.toLowerCase()) !== -1){
            userTask.push(task)
          }
          return null
        })
        if (userTask.length === 0) {
          setError("Task not found!")
          return
        } else {
          setTasks(userTask)
          setError(null)
         }}
        )
        const newTask$ = addTask$.subscribe(() => loadTasks())
        return () => {
          userInputSearch$.unsubscribe()
          newTask$.unsubscribe()
        }
      }, []  
  )     
   
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks === null) {
      setTasks([])
      setError(null)
    } else {
      setTasks(tasks)
      setError(null)
    }
  }

  const onDeleteTodo = (id) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    const filteredTasks = allTasks.filter(task => task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    setTasks(tasks.filter(task => task.id !== id))
  }

  const onCompleteTodo = (id) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    const filteredTasks = allTasks.map(task => setCompleted(task, id))
    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
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