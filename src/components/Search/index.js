import React from 'react'
import styled from 'styled-components'
import { fromEvent, of, Subject } from 'rxjs'
import { delay, map, switchMap } from 'rxjs/operators'

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
`

export const findTask$ = new Subject()

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }

  componentDidMount(){
    this.search$ = fromEvent(this.searchRef.current, "input")
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
      });
  }

  componentWillUnmount(){
    this.search$.unsubscribe()
  }

  render(){
    return (
      <Input placeholder="Find your favourite todo!" ref={this.searchRef} type="text"/>
    )
  }
}