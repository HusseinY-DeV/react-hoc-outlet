import { useContext } from 'react'
import { ClientContextState } from '../components/context/client/ClientContext'

export function useClientContext() {

    const { user, updateUserContext, restoreUserContext, fillUserContext } = useContext(ClientContextState)
    return {
        user, updateUserContext, restoreUserContext, fillUserContext
    }
}
