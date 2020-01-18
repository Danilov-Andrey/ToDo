import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fromEvent, of } from 'rxjs'
import { delay, map, switchMap } from 'rxjs/operators'

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
`

export const Search = ({setSearchTodo}) => {  
  const searchRef = useRef(null)
  useEffect(() => {    
    const search$ = fromEvent(searchRef.current, "input")
    .pipe(
        switchMap(userInput =>
          of(userInput).pipe(
            delay(1000),
            map(userInput => userInput["target"].value)           
          )
        )
      )
      .subscribe((value) => {
        setSearchTodo(value.trim())
      })
      return () => search$.unsubscribe()
    }
  )
    return (
      <Input placeholder="Find your favourite todo!" ref={searchRef} type="text"/>
    )  
}

Search.propTypes = {
  setSearchTodo: PropTypes.func.isRequired
}