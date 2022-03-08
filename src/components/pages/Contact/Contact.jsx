import { useImperativeHandle, useState } from "react"
import { InputHIS } from "../../common";

const INITIAL_STATE = {
    email: "",
    review: ""
}

export function Contact(props) {

    const { outerRef } = props;

    const [{ email, review }, setFormState] = useState(INITIAL_STATE);

    const handleChange = (name, value) => {
        const newState = { email, review, [name]: value };
        setFormState(newState);
    }

    const handleClear = () => {
        setFormState(INITIAL_STATE);
    }

    const handleSave = () => {
        console.log({ email, review });
    };

    useImperativeHandle(outerRef, () => {
        return { handleSave, handleClear }
    }, [handleSave]);

    return <div>
        <h1>This is the contact page</h1>
        <InputHIS name="email" value={email} onChange={handleChange} placeholder="Email" />
        <InputHIS name="review" value={review} onChange={handleChange} placeholder="Review" />
    </div>
}
