import React, { useState } from 'react'
import List from './List'
import {dataArray} from '../data.js'

const SortList = () => {
  const [persons, setPersons] = useState(dataArray);
  

  const sortLowToHeightHandle = () => {
    const arr = persons.sort((a, b) => b.id - a.id)
    setPersons([...arr])
  }

  const filterIdHandle = () => {
    setPersons(persons.filter(person => person.id > 4))
  }

  const filterNameHandle = () => {
    setPersons(persons.filter(person => person.first_name !== 'Katusha'))
  }

  const resetHandle = () => {
    setPersons([...dataArray])
  }

  return (
    <div>
      <List dataArray={persons} />
      <button type="button" onClick={filterNameHandle}>Filter by name</button>
      <button type="button" onClick={filterIdHandle}>Filter by id</button>
      <button type="button" onClick={sortLowToHeightHandle}>height to low</button>
      <button type="button" onClick={resetHandle}>reset</button>
    </div>
  )
}

export default SortList