import { useRef } from "react";
import { HeaderBtn } from "../custom"


export function withHeaderBtn(Component) {


    return props => {

        const ref = useRef();

        const handleSave = () => {
            ref.current.handleSave();
        };

        const handleClear = () => {
            ref.current.handleClear();
        }

        return <>
            <HeaderBtn handleSave={handleSave} handleClear={handleClear} />
            <Component {...props} outerRef={ref} />
        </>
    }

}
