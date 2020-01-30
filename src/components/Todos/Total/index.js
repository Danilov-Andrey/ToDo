import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  getTotalTodos,
  getActiveTodos,
  getFinishedTodos
} from '../../../selectors';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  p {
    margin-bottom: 0;
  }
`;

const Total = ({ total, active, finished }) => {
  return (
    <Wrapper>
      <p>
        Total: <span> {total} </span>
      </p>
      <p>
        Active: <span> {active} </span>
      </p>
      <p>
        Finished: <span> {finished} </span>
      </p>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    total: getTotalTodos(state),
    active: getActiveTodos(state),
    finished: getFinishedTodos(state)
  };
};

Total.propTypes = {
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  finished: PropTypes.number.isRequired
};

export default connect(mapStateToProps, null)(Total);
