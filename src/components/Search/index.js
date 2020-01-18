import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { fromEvent, of, Subject } from 'rxjs'
import { delay, map, switchMap } from 'rxjs/operators'

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
`

export const findTask$ = new Subject()

export const Search = () => {  
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
        findTask$.next(value.trim())
      })
      return () => search$.unsubscribe()
    }
  )
    return (
      <Input placeholder="Find your favourite todo!" ref={searchRef} type="text"/>
    )
  
}