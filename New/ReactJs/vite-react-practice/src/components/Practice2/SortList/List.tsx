import React from 'react'

const List = ({dataArray}) => {
  return (
    <div className="wrapper" style={{"display":"flex","padding": "60px 0 60px 0"}} >
        {dataArray.map(person => {
            return (
                <Item id={person.id} imageSrc={person.image} key={person.email} />
            )
        })}
    </div>
    
  )
}

const Item = ({id, imageSrc}) => {
    return (
        <div style={{"display":"flex"}}> 
        <p>{id}</p>
        <img src={imageSrc} style={{"width":"25px","height":"25px", "marginLeft": "10px"}} /> 
        </div>
    )
}

export default List