import React, { FormEvent, useRef } from 'react'

const UncontroledForm = () => {
  const value = 'string'

  const inputRef = useRef(null);  // Данные запишутся в объект , в св-во "current". С

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(inputRef.current)
    console.log(inputRef.current ? new FormData(inputRef.current).get("my-input") : null) // Получили данные напрямую из dom-элемента
}

  return (
    <form 
    style={{"paddingTop": "60px"}} 
    onSubmit={submitHandler}
    ref={inputRef} // ref - служебный проп для связи dom-элемента с React. врезультате в inputRef будет сслка на dom-элемент form
    // Ссылка появится только после отрисовки эл-та. До отрисовки в нём будет значение по-умолчанию. 
    >
        <input type="text" name="my-input" defaultValue={value} /> {/* Использовать defaultValue value для значения по умолчанию в неконтролируемых компонентах  */}
        <button>Submit</button>
    </form>
  )
}

export default UncontroledForm