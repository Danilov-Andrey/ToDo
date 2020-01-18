import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

export const Add = ({setTodos, todos}) => { 
  const [task, setTask] = useState('')
  const [error, setError] = useState(null)

  const onAdd = (e) => {
    e.preventDefault()
    if (task.trim().length > 5){
      const tasks = [...todos, {task, id: getRandomInt(), completed: false}]        
      setTodos(tasks) 
      setTask('')
      setError(null)  
    } else {
      setError("At least 5 symbols")      
    }
  }

  const getRandomInt = () => {
    return Date.now()
  }


  const userTask = (e) => { 
    if (e.target.value.length > 5){
      setTask(e.target.value)
      setError(null)  
    } else {
      setTask(e.target.value)
      setError("At least 5 symbols")  
    }
  }

    return(
      <>
        <Form onSubmit={e => onAdd(e)}> 
            <Input type="text" value={task} placeholder="Enter your important task!" onChange={e => userTask(e)}/>
            <Button type="submit">Add</Button>      
        </Form>
        {error ? <Error>{error}</Error> : null}
      </>
    )
}

Add.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}