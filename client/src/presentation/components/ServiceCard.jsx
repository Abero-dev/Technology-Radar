import React from 'react';
import { NavLink } from 'react-router-dom';

export const ServiceCard = ({ icon, title, options, onOptionClick }) => {
    return (
        <div className='flex flex-col'>
            <div className='mt-10'>
                <figure className='flex justify-center items-center gap-[20px] mb-3'>
                    <img src={icon} alt='icon' className='scale-[2] invert brightness-[50%] contrast-[100%] saturate-[20%] sepia-0' />
                    <h1 className='text-3xl text-stone-100'>{title}</h1>
                </figure>
            </div>
            <ul className='flex flex-col justify-center items-center gap-[20px] p-0'>
                {options.map((option, index) =>
                    <li key={index} className='list-none transition-transform duration-[200ms] ease-in-out hover:scale-110' onClick={onOptionClick}>
                        <NavLink to={option.route} className='no-underline text-[#eee] text-[26px] text-right cursor-pointer rounded-[12px] px-[8px] py-0 hover:border-b-4 hover:border-[#eee]'>
                            {option.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
};
