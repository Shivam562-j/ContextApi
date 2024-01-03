# UseContext

Step 1: import React from "react";

Step 2: const UserContext = React.createContext();

Step 3: export default UserContext;

Step 4: Make a context provider for data access 

import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
