import React from 'react'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
  const navigate =  useNavigate(); // хук для навигации к нужной страницы. Внутри "navigate()" по умолчанию путь относительно текущей страницы
  return (
    <>
      <div>FirstPage</div>
      <button onClick={(): void => navigate('/practice2/dynamic-page')}>Navigate to dynamic-page</button>
    </>
  )
}

export default FirstPage