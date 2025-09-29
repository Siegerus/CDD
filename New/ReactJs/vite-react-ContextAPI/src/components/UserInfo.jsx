import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserInfo = () => {
   let {UserName} = useContext(UserContext);
   
   return (
      <h1>{UserName}</h1>
   )
}

export default UserInfo