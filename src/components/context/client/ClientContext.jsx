import { createContext, useState } from "react"


export const ClientContextState = createContext();

const INITIAL_STATE = { name: "", email: "" };

export function ClientContext({ children }) {

    const [user, setUser] = useState(INITIAL_STATE);

    const fillUserContext = (value) => {
        setUser(value);
    }

    const updateUserContext = (name, value) => {
        const newUser = { ...user, [name]: value };
        setUser(newUser);
    }

    const restoreUserContext = () => {
        setUser(INITIAL_STATE);
    }

    return (
        <ClientContextState.Provider value={{ user, updateUserContext, restoreUserContext, fillUserContext }}>
            {children}
        </ClientContextState.Provider>
    )
}

