import React from 'react'

const Details = ({...formData}) => {
  return (
    <div className="details">
            <ul>
                <li>firstname: {formData.firstname}</li>
                <li>lastname: {formData.lastname}</li>
                <li>email: {formData.email}</li>
            </ul>
        </div>
  )
}

export default Details