import React, { useEffect, useState } from 'react'
import { isRequired } from '../../../utils/isRequired';

export function InputHIS({ type = "text", name = isRequired("name"), placeholder = "", value, onChange, disabled = false }) {

    const [state, setState] = useState(value);

    const handleChange = e => {
        onChange(name, e.target.value);
        setState(e.target.value);
    }

    useEffect(() => {
        if (state !== value) setState(value);
    }, [value]);

    return (
        <input type={type} placeholder={placeholder} value={state} onChange={handleChange} disabled={disabled} />
    )
}
