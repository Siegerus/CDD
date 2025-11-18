import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {

  const [elementIsVisible, setElementIsVisible] = useState(false)
  useEffect(() => {
    const toClick = (e) => {
      const target = e.target.closest('body');
      if(!target) return
      console.log('clicked!');
      setElementIsVisible((prevState) => !prevState) // функциональное обновление сост-я. В "prevState" находится "elementIsVisible"
      document.removeEventListener('click', toClick) // проcто удаляем событие после первого клика. А в return всегда снимаем подписку(очищаем эффект)
      // ! не перепутать с тем, что в return. 
    };
    document.addEventListener('click', toClick );

    return (() => document.removeEventListener('click', toClick)) // снимаем подписку с DOM
    // Т.е по факту каждый раз происходит подписка-отписка
    // перед применением эффекта, снимаем прошлый эффект (для освобождения памяти).Например, если был бы setTimeout, нужен был бы clearTimeout
  }, [/* elementIsVisible */]);

  const [count, setCount] = useState(0);

  const clickHandle = () => setCount(count + 1);

  useEffect(() => {
    console.log('Hellow from useEffect'); // будет вызвана при отрисовке-монтировании к-та
    return (() => console.log('componentWillUnmount')) // будет вызвана при отмонтировании к-та
    // внутри useEffect можно написать return и вызвать ф-цию для отмены эффекта (фция будет вызвана при отмонтировании к-та)
  }, [count]) // если указать пустой массив, то функция выполниться однократно и не будет выполняться при каждой перерисовке к-та
  // в данном случае будет выполняться каждый раз при изменении count
// Перед повторным вызовом основной ф-ции (console.log('Hellow from useEffect')) Всегда будет выполняться от, что в "return"


// Ниже просто пример работы хука с сервером
// useEffect(() => {
//   let isNeedUpdate = true; // 

//   fetch('some kind of url')
//   .then((response) => response.json())
//   .then((json) => isNeedUpdate && setState(json))  // Для того, что бы точно знать, что компонент перерисовался с актуальными данными
//   // Данные с сервера могут приходить медленнее, чем происходит клик.

//   return () => isNeedUpdate = false;
// }, [])


  return (
    <>
      <div> { <p style={elementIsVisible ? {"color": "coral"} : undefined}>UseEffectComponent</p>} </div> 
    <div>
      <div>UseEffectComponent</div>
      <button type="button" onMouseDown={clickHandle}>inc +1</button> <p>{count}</p>
    </div>
    </>
    
    
  )
}

export default UseEffectComponent