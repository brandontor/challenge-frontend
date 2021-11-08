import { createContext, useState } from "react";

export const ClassContext = createContext();

function ClassProvider({children}) {

   const [role, setRole] = useState('');

    return (
        <ClassContext.Provider value={{ role, setRole }}>
            {children}
        </ClassContext.Provider>
    );
};

export default ClassProvider