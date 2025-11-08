import React, { useState, ChangeEvent } from 'react';
import Details from './details';

// const envVar = import.meta.env.VITE_TEST_CONST;
// console.log(envVar);

const Form = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    const [isVisibleDetails, setIsVisibleDetails] = useState(false);

    const changeInputHandle = (e: ChangeEvent<HTMLInputElement>) => { //типы для событий импортируем из React
        setFormData({
            ...formData, [e.target.name]: e.target.value, // Копируем всё что есть в объекте "formData" через "..." и меняем нужное св-во
        });
    }

    const updateStateHandle = () => {
        setFormData({
            firstname: 'empty datas',
            lastname: 'empty datas',
            email: 'empty datas',
        })
    }

    const showDetailsHandle = () => {
        setIsVisibleDetails((isVisibleDetails) => !isVisibleDetails);
    }

  return (
    <>
        <form className="feed-form" style={{'marginTop': '100px', 'display':'flex', 'flexDirection' : 'column', 'maxWidth' : '300px'}}>
            <label htmlFor="firstname">firstname</label>
            <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={changeInputHandle} />

            <label htmlFor="lastname">lastname</label>
            <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={changeInputHandle} />

            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" value={formData.email} onChange={changeInputHandle} />
            
            <button type="button" style={{'marginTop': '20px'}} onClick={updateStateHandle} >Обновить</button>
            <button type="button" style={{'marginTop': '20px'}} onClick={showDetailsHandle} >{isVisibleDetails ? ' Спрятать' : 'Показать'} </button>
        </form>

        {isVisibleDetails ? <Details {...formData} /> : null}
    </>
  )
}

export default Form