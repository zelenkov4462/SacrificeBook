import React from "react";
import './button.css';


const Button = ({value, func}) => {
    return (
        <div className={'btn'}>
            <button  onClick={func}>{value}</button>

        </div>
    )
}

export default Button;