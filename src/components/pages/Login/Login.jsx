import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useClientContext } from '../../../hooks/useClientContext';
import { setSessionInfo } from '../../../utils/session';
import { ButtonHIS, InputHIS } from "../../common"

export function Login() {

    const [{ username, password }, setFormState] = useState({
        username: "",
        password: ""
    });

    const { updateUserContext } = useClientContext();
    const navigate = useNavigate();

    const handleChange = (name, value) => {
        const newState = { username, password, [name]: value };
        setFormState(newState);
    }

    const handeLogin = () => {
        if (username && password) {
            setSessionInfo("token", "test");
            updateUserContext("name", username);
            navigate("/");
        } else {
            alert("Username and password are required");
        }
    };

    return (
        <section>
            <InputHIS onChange={handleChange} value={username} name="username" placeholder="Username" /><br />
            <InputHIS type='password' onChange={handleChange} value={password} name="password" placeholder="Password" /><br />
            <ButtonHIS onClick={handeLogin} title="Login" />
        </section>
    )
}
