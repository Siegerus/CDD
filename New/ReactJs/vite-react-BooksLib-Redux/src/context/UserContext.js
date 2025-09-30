import { createContext } from "react";

let UserContext = createContext({ // В скобках можно указать значение по умолчанию. Будет указываться, если нет "UserContext.Provider"
    UserName: '',
    ChangeUserName: () => {},   // Указывается как правило хорошего тона, что бы, если гдето нет "Provider", небыло ошибки "not a function"
}); 

export default UserContext; 