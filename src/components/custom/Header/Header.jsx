import { useNavigate } from "react-router-dom";
import { useClientContext } from "../../../hooks/useClientContext";
import { clearSessionInfo } from "../../../utils/session";


export function Header() {

    const { user, restoreUserContext } = useClientContext();
    const navigate = useNavigate();

    const handleLogout = e => {
        e.preventDefault();
        restoreUserContext();
        clearSessionInfo();
        navigate("/login", { replace: true });
    }

    return <header>
        <h1>{user.name}</h1>
        <button onClick={handleLogout}>Logout</button>
    </header>
}
