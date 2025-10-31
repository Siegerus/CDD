import React from 'react'
type innerProps = {
    num: number;
}
const Inner = ({num}: innerProps) => {
  return (
    <div>Inner{num}</div>
  )
}

export default Inner