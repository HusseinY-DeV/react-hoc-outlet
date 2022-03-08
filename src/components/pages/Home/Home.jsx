import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Home(props) {

    const navigate = useNavigate();

    const handleNavigation = e => {
        navigate(e.target.id);
    }

    return <div>
        <h1>This is the home</h1>
        <button onClick={handleNavigation} id='form'>Go to form</button><br />
        <button onClick={handleNavigation} id='contact'>Go to contact</button><br />
        <button onClick={handleNavigation} id='test'>Go to test</button>
    </div>
}
