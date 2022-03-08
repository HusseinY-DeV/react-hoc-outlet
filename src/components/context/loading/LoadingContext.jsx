import { createContext } from "react"
import { useBoolean } from "../../../hooks/useBoolean";


export const LoadingContextState = createContext();

export function LoadingContext({ children }) {

    const { loading, onloading, offloading, toggleloading } = useBoolean({ value: true, stateName: "loading" });


    return (
        <LoadingContextState.Provider value={{ loading, onloading, offloading, toggleloading }}>
            {children}
        </LoadingContextState.Provider>
    )
}
