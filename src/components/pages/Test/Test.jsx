import { useImperativeHandle } from "react";
import { useOutletContext } from "react-router-dom";

export function Test() {

    const { outletRef } = useOutletContext();


    const handleSave = () => {
        console.log("SAVING");
    }

    const handleClear = () => {
        console.log("CLEARING");
    }

    useImperativeHandle(outletRef, () => {
        return {
            handleSave, handleClear
        }
    });

    return <div>
        <h1>This is the test component implemented with outlet context</h1>
    </div>
}
