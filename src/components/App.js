import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import Search from './Search';
import Todos from './Todos';
import Add from './Add';
import './App.css';
import { Navigation } from './Navigation';
import { Switch, Route } from 'react-router-dom';
import { Feedback } from './Feedback';

const Wrapper = styled.div`
  background-color: #bc2c3d;
  width: 400px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/">
          <Wrapper>
            <Search />
            <Add />
            <Todos />
          </Wrapper>
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
