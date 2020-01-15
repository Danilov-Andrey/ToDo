import React from 'react'
import styled from 'styled-components'
import { Subject } from 'rxjs';

const Form = styled.form`
  width: 80%;
  display: flex;
  margin: 16px auto 0 auto;
`

const Input = styled.input`
  width: 80%; 
`

export const Button = styled.button`
  margin-left: 10px;
  width: 20%; 
  border-radius: 5px;
  border: 0;
  background-color: #efd2bc;
  cursor: pointer;
`

const Error = styled.p`
  margin-bottom: 0;
`

export const addTask$ = new Subject()

export class Add extends React.Component { 
  state = {
    task: '',
    error: null
  }

  onAdd = (e) => {
    e.preventDefault()
    const {task} = this.state;
    if (task.trim().length > 5){
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      if( tasks === null ){
        tasks = [{task, id: this.getRandomInt(), completed: false}]
      } else {
        tasks = [...tasks, {task, id: this.getRandomInt(), completed: false}]  
      }
      localStorage.setItem('tasks', JSON.stringify(tasks)) 
      addTask$.next()
      this.setState({task: '', error: null})      
    } else {
      this.setState({error: "At least 5 symbols"})      
    }
  }

  getRandomInt = (max) =>  {
  return Math.floor(Math.random() * Math.floor(10000)) + Date.now()
}


  userTask = (e) => { 
    if (e.target.value.length > 5){
      this.setState({task: e.target.value, error: null})
    } else {
      this.setState({task: e.target.value, error: "At least 5 symbols"})
    }

  }

  render(){
    const {task, error} = this.state
    return(
      <>
      <Form onSubmit={e => this.onAdd(e)}> 
          <Input type="text" value={task} placeholder="Enter your important task!" onChange={e => this.userTask(e)}/>
          <Button type="submit">Add</Button>      
      </Form>
        {error ? <Error>{error}</Error> : null}
      </>
    )
  }
}