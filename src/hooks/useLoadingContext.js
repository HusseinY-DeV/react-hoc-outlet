import { useContext } from 'react'
import { LoadingContextState } from '../components/context/loading/LoadingContext'

export function useLoadingContext() {

    const { loading, onloading: onLoading, offloading: offLoading, toggleloading: toggleLoading } = useContext(LoadingContextState);

    return {
        loading,
        onLoading,
        offLoading,
        toggleLoading
    }
}
