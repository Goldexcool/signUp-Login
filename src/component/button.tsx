import React from 'react'

interface ButtonProps {
    text: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, style }) => {
    return (
        <button className='p-2 bg-color1 ' style={style}>{text}</button>
    )
}

export default Button
