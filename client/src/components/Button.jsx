import React from 'react';
import { salaryType } from '../constants/index';

const Button = ({handleClick}) => {
    return (
        <>
            {
                salaryType.map((type,i) => (
                    <button key={i} onClick={handleClick} value={type.name} className='px-2.5 py-1 border text-[14.5px] hover:bg-blue hover:text-white'>
                    {type.name}
                    </button>
                ))
            }
        </>

    )
}

export default Button