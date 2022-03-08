import React from 'react'

export function ButtonHIS({ disabled = false, title = "", onClick }) {

    const handleClick = e => {
        e.preventDefault();
        onClick();
    };

    return <button disabled={disabled} onClick={handleClick}>{title}</button>
}
