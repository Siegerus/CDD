import React from 'react'
import Inner from '../components/inner'

const num = 123;
const Main = (): JSX.Element => {
  return (
    <div><Inner num={num} /></div>
  )
}

export default Main