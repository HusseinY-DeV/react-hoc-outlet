import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { HeaderBtn } from "../custom";


export function HeaderBtnContainer() {

    const outletRef = useRef(null);

    const handleSave = () => {
        outletRef.current.handleSave();
    }

    const handleClear = () => {
        outletRef.current.handleClear();
    }

    return <>
        <HeaderBtn handleClear={handleClear} handleSave={handleSave} />
        <Outlet context={{ outletRef }} />
    </>
}
