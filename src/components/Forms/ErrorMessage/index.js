import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  color: #f53a50;
  margin: 10px;
  margin-left: 0;
  text-align: left;
`;

export const ErrorMessage = ({ children }) => <Message>{children}</Message>;
