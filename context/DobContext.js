import { createContext, useState } from "react";

export const DobContext = createContext();

function DobProvider({children}) {
    const [dob, setDob] = useState('');


    return (
        <DobContext.Provider value={{ dob, setDob }}>
            {children}
        </DobContext.Provider>
    );
};

export default DobProvider