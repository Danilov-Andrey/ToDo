import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
 
const Input = styled.input`
  width: 80%;
  margin: 0 auto;
`

export const Search = ({setSearchTodo}) => {
  const delayedQuery = useRef(_.debounce((value) => setSearchTodo(value), 1000)).current
  const search = (e) => {
    delayedQuery(e.target.value.trim())
  }
  return (
      <Input placeholder="Find your favourite todo!" onChange={e => search(e)} type="text"/>
    )  
}

Search.propTypes = {
  setSearchTodo: PropTypes.func.isRequired
}