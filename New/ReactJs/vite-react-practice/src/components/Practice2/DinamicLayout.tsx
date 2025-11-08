import React from 'react'
import { Outlet } from 'react-router-dom'

const DinamicLayout = () => {
    
  return (
    <>
      <p>dinamic page</p>
      <div><Outlet /></div>
    </>
  )
}

export default DinamicLayout