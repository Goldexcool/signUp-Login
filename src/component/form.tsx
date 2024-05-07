import React from 'react'

interface InputTypes {
  labeltext: string;
    type: string;
    style?: React.CSSProperties;
}

const Form: React.FC<InputTypes> = ({labeltext, type, style}) => {
  return (
    <form className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-[0.4rem] text-color1 font-[700]'>{labeltext}</label>
        <input type={type} className="p-[2rem] border-color1 border-2 "/>
    </form>
  )
}

export default Form