import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
    user: string;
    setUser: (name: string) => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {


    const [user, setUser] = useState(" The King Ruuz ")

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>

    )
}



export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error("useAppContext must be used inside AppProvider")
    return context
}

