import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useClientContext } from "../../hooks/useClientContext";
import { useLoadingContext } from "../../hooks/useLoadingContext";
import { getSessionInfo } from "../../utils/session";


export function AuthContainer() {

    const { loading, offLoading, onLoading } = useLoadingContext();
    const { updateUserContext } = useClientContext();
    const navigate = useNavigate();

    const checkAuthState = async () => {
        try {
            onLoading();
            if (getSessionInfo("token") !== "test") {
                navigate("/login", { replace: true });
            } else {
                // ? In real scenario decoding the token will be done to get the realy payload and fill it inside the context state (client context)
                updateUserContext("name", "Hussein");
            }
        } catch (error) {
            console.log(error);
        } finally {
            offLoading();
        }
    }

    useEffect(() => {
        checkAuthState();
    }, []);

    if (loading) return <div className="loader">Loading... Please wait</div>
    return <>
        <Outlet />
    </>
}
