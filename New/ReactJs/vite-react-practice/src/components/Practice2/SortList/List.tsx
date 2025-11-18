import React from 'react'

const List = ({dataArray}) => {
  return (
    <>
        {dataArray.map(object => {
            return (
                <Item id={object.id} key={object.email} />
            )
        })}
    </>
  )
}

const Item = ({id}) => {
    return (
        <div className=""> <p>{id}</p> </div>
    )
}

export default List