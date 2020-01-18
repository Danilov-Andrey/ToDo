import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { Search } from './Search'
import { Todos } from './Todos'
import { Add } from './Add'
import './App.css'

const Wrapper = styled.div`
  background-color: #bc2c3d;
  width: 400px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`

const App = () => {  
    const [searchTodo, setSearchTodo] = useState('')
    const [todos, setTodos] = useState([])

    return (
     <div className="App">
      <Header/>
      <Wrapper>
        <Search setSearchTodo={setSearchTodo}/>
        <Add setTodos={setTodos} todos={todos}/>
        <Todos searchTodo={searchTodo} todos={todos}/>
      </Wrapper>
    </div>
    )
}

export default App;
