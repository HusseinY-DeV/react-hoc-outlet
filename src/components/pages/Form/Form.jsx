import { useImperativeHandle, useState } from "react"
import { InputHIS } from "../../common";

const INITIAL_STATE = {
    username: "",
    email: ""
}



export function Form(props) {

    const { outerRef } = props;

    const [{ email, username }, setFormState] = useState(INITIAL_STATE);

    const handleChange = (name, value) => {
        const newState = { email, username, [name]: value };
        setFormState(newState);
    }

    const handleSave = () => {
        console.log({ email, username });
    };

    const handleClear = () => {
        setFormState(INITIAL_STATE);
    }

    useImperativeHandle(outerRef, () => {
        return { handleSave, handleClear }
    }, [handleSave]);

    return <div>
        <h1>This is the form</h1>
        <InputHIS name="email" value={email} onChange={handleChange} placeholder="Email" />
        <InputHIS name="username" value={username} onChange={handleChange} placeholder="Name" />
    </div>
};

