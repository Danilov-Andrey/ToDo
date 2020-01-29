import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import './link.css';

const after = css`
  content: '';
  position: absolute;
  height: 2px;
  bottom: -5px;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
  left: 50%;
`;

const Ul = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;

const Li = styled.li`
  list-style-type: none;
  position: relative;
  a {
    font-size: 20px;
    &::after {
      ${after};
      width: 0%;
      background-color: #bc2c3d;
    }
    &:hover::after {
      width: 100%;
      transition: all 0.2s ease-in-out;
    }
    &.selectedLink::after {
      ${after};
      width: 100%;
      background-color: red;
    }
  }
`;

export const Navigation = () => {
  return (
    <Ul>
      <Li>
        <NavLink activeClassName="selectedLink" exact to="/">
          Todos
        </NavLink>
      </Li>
      <Li>
        <NavLink activeClassName="selectedLink" to="/feedback">
          Feedback
        </NavLink>
      </Li>
    </Ul>
  );
};
