"use client"
import React, { useState } from 'react';
import Docdowload from "./Docdowload"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const StudioMenu = () => {
    const [open, setOpen] = useState<string>("invisible");


    const Menu: React.FC<{ isOpen: string }> = ({ isOpen }) => {
        return (
            <div className={`fixed z-50 p-3 right-0 top-0 w-[250px] bg-gray-200 min-h-screen ${isOpen} animate-fade-left animate-duration-500 shadow-xl`}>
                <button onClick={toggleMenu} className=' font-bold text-xl flex w-full text-black justify-end px-4 py-2'><MdOutlineKeyboardArrowRight size={30} /></button>
                <div className='flex flex-col gap-2 w-full h-full'>
                    <h1 className='font-bold text-black'>อ่านแบบเต็ม</h1>
                    <Docdowload />
                    <h1 className='font-bold text-black mt-4'>ชุดข้อมูล</h1>
                    <Link href="https://github.com/BestTTTA/depression-data-set.git" className='border bg-black text-white flex items-center justify-center p-2 gap-x-2 rounded-md hover:scale-105'>GitHub <FaGithub /> </Link>
                </div>
            </div>
        );
    }

    const toggleMenu = () => {
        const newState = open === "invisible" ? "visible" : "invisible";
        setOpen(newState);
    }

    return (
        <div>
            <Menu isOpen={open} />
            <button onClick={toggleMenu} className='flex focus:scale-95 hover:scale-95 bg-[#F3541C] h-12 w-12 rounded-full text-white justify-center items-center'>
                <GiHamburgerMenu size={30} />
            </button>
        </div>
    );
}

export default StudioMenu;
