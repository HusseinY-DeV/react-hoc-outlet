import { Outlet } from "react-router-dom";
import { Header } from "../custom";

export function ProtectedLayoutContainer() {

    return <>
        <Header />
        <Outlet />
    </>
}
