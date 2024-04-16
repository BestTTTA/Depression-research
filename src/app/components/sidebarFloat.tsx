"use client"
import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Docdowload from "./Docdowload"


const StudioMenu = () => {
    const [open, setOpen] = useState<string>("invisible");

    // const router = useRouter();

    // const isActive = (route: string) => {
    //     return router.pathname === route ? 'bg-gray-800 rounded-xl border' : 'bg-gray-700';
    // }

    const Menu: React.FC<{ isOpen: string }> = ({ isOpen }) => {
        return (
            <div className={`fixed p-3 right-0 top-0 w-[250px] h-full z-50 bg-[#9F6D28] ${isOpen}`}>
                <button onClick={toggleMenu} className=' font-bold text-xl flex w-full text-white justify-end px-4 py-2'>x</button>
                <div className='flex flex-col gap-2 w-full h-full'>
                    <h1 className='font-bold text-white'>อ่านแบบเต็ม</h1>
                    <Docdowload />
                </div>
            </div>
        );
    }

    const toggleMenu = () => {
        const newState = open === "invisible" ? "visible" : "invisible";
        setOpen(newState);
    }

    return (
        <div className="fixed bottom-5 right-8">
            <Menu isOpen={open} />
            <button onClick={toggleMenu} className='flex focus:scale-95 hover:scale-95 bg-[#F3541C] h-12 w-12 rounded-full text-white justify-center items-center'>
                +
            </button>
        </div>
    );
}

export default StudioMenu;
