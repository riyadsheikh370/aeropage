import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
    let [show, setShow] = useState(false);

    let handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <nav className='py-7'>
                <div className="max-w-container px-3 lg:px-0 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <img src={Logo} alt={Logo} />
                        </div>
                        <div className="">
                            <ul className={`text-center lg:text-black lg:p-0 p-3 text-white text-[16px] lg:flex items-center gap-6 z-[50] absolute top-0 left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[#EA580C] top-[120px] w-full rounded" : "top-[-200px] left-[200px] w-full"}`}>
                                <li><a className='font-pops lg:hover:text-[#EA580C] hover:text-[black]' href="#">Home</a></li>
                                <li><a className='font-pops lg:hover:text-[#EA580C] hover:text-[black]' href="#">About</a></li>
                                <li><a className='font-pops lg:hover:text-[#EA580C] hover:text-[black]' href="#">Services</a></li>
                                <li><a className='font-pops lg:pr-[250px] lg:hover:text-[#EA580C] hover:text-[black]' href="#">Contact</a></li>
                                <div className="ml-[26%] lg:ml-0 sm:ml-[37%] flex lg:px-[40px] text-white hover:text-[black] lg:py-[10px] rounded-2xl lg:bg-[#EA580C]">
                                    <div className="lg:mt-[5px] mt-[5px] lg:opacity-100 opacity-0 pr-[20px]">
                                        <FaCloudDownloadAlt />
                                    </div>
                                    <div className="lg:pl-0 pl-[5%]">
                                        <li><a className='font-pops inline-block' href="#">Download</a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="lg:hidden" onClick={handleShow}>
                            {show == true ? <RxCross2 /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
