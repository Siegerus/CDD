import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Practice2Layout = () => {
  return (
    <>
        <Link to='.'> to main-pactice2-page</Link>
        <Link to='first-page'>to first-page</Link>
        <Link to='second-page'> to second-page</Link>
        <Link to='dynamic-page'> to dynamic-page</Link>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Practice2Layout