import React from 'react'

type HAComponent = {
    myProp: string,
}

const HAComponent = ({myProp} :HAComponent): JSX.Element => {

  return (
    <div>{myProp}</div>
  )
}

export default HAComponent