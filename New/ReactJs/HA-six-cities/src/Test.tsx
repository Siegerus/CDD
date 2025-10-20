import {useState} from 'react'
const Test = () => {
    const [text, setTest] = useState('lorem')
    const handler = () =>  {
        setTest('clicked');
    }
  return (
    <div onClick={handler}>{text}</div>
  )
}

export default Test