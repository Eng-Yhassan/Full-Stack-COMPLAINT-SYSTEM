import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LeftDash = () => {
    const [open, setOpen] = useState(false);

    const handleIsClose = () => {
        setOpen(true);
    }
    const handleIsOpen = () => {
        setOpen(false);
    }
    return (
        <div style={{
            width: open === true ? "90px" : ""
        }} className='bg-yellow-300 h-[1210px] w-[190px] fixed '>
            <div className='flex justify-end items-center px-4 text-3xl py-2'>
                <i
                    style={{
                        display: open === true ? "none" : ""
                    }}
                    onClick={handleIsClose}
                    className='fa-solid fa-x '></i>

                <i
                    style={{
                        display: open === true ? "block" : ""
                    }}
                    onClick={handleIsOpen}
                    className="fa-solid fa-arrow-right hidden"></i>
            </div>
            <ul
                style={{
                    display: open === true ? "none" : ""
                }}
                className='flex flex-col justify-center items-center text-3xl py-20 space-y-8'>
                <li>Dashboard</li>
                <li>Complaints</li>
            </ul>
        </div>
    )
}

export default LeftDash