import {useState} from 'react';


function RandomNumber() {
    let [currentValue, SetValue] = useState('100');
    let setRandomNumber = () => {
        SetValue(Math.round(Math.random() * 100));
    }
    return (
        <div>
            <h1>{currentValue}</h1>
            <button onClick={setRandomNumber} >Random</button>
        </div>
    )
}

export default RandomNumber;