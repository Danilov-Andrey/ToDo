import React from "react"
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

export class Todos extends React.Component {
  state = {
    tasks: [],
    error: null
   }

  componentDidMount(){
    this.loadTasks()
    this.userInputSearch$ = findTask$.subscribe((taskName) => {
      if (taskName.length === 0) {
        this.loadTasks()
        return
      }
      const tasks = JSON.parse(localStorage.getItem('tasks'))       
      const userTask = tasks.filter(task => task.task === taskName)
      if (userTask.length === 0) {
        this.setState({error: "Task not found!"})
        return
      } else {
        this.setState({tasks: userTask, error: null})
      }}
    )
    this.newTask$ = addTask$.subscribe(() => this.loadTasks())
  }  

  componentWillUnmount() {
    this.userInputSearch$.unsubscribe()
  }

  loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks === null) {
      this.setState({tasks: [], error: null})
    } else {
      this.setState({tasks, error: null})
    }
  }

  onDeleteTodo = (id) => {
    const {tasks} = this.state
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    const filteredTasks = allTasks.filter(task => task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    this.setState({tasks: tasks.filter(task => task.id !== id)})
  }

  onCompleteTodo = (id) => {
    const {tasks} = this.state
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    const filteredTasks = allTasks.map(task => this.setCompleted(task, id))
    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    this.setState({tasks: tasks.map(task => this.setCompleted(task, id))})
  }

  setCompleted = (task, id) => {
      if (task.id === id){
        task = {...task, completed: !task.completed}
      }
      return task
  }

  render(){
    const { tasks, error } = this.state
    let output;
    if (error !== null) {
      output = <Error>{error}</Error>
    } else if (tasks.length === 0) {
      output = <NoTasks>No tasks</NoTasks>
    } else {
      output = 
        <Tasks>
          {tasks.map(task => <Todo task={task} completeTodo={this.onCompleteTodo} deleteTodo={this.onDeleteTodo}/>)}
        </Tasks>
    }
    
    return output
  }
}