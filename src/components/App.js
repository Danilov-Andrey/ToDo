import React from 'react'
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

class App extends React.Component {

  state = {
    currentTask: null
  }

  findTask = (taskName) => {
    const tasks = localStorage.getItem('tasks')
    const userTask = tasks.filter(task => task.task === taskName)
    if (userTask.length === 0) {
      return
    } else {
      this.setState({currentTask: userTask})
    }
  }
  
  render(){
    return (
     <div className="App">
      <Header/>
      <Wrapper>
        <Search/>
        <Add/>
        <Todos/>
      </Wrapper>
    </div>
    )
  }
}

export default App;
