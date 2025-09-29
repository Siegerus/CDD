import { useState } from "react";
import { useContext } from "react"
import UserContext from "../context/UserContext"

const ChangeUser = () => {
let {UserName, ChangeUserName} = useContext(UserContext);
let [value, setValue] = useState('');

let onCahngeHandler = (e) => {
    setValue(e.target.value);
}
  return ( 
    <>
    <input style={{'display' : 'block', 'margin': '0 auto'}} type="text" onChange={onCahngeHandler} value={value} />
    <button style={{'padding' : '15px', 'marginTop': '19px'}} 
            onClick={() => ChangeUserName(value)}>
            Change name
    </button>
    </>
  )
}

export default ChangeUser