import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const resetNav = () => {
        setNav(false)
    }

    return (
        <section className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white" id="about">
            <h1 className="w-20 text-3xl font-bold text-[#00df9a]">ME.</h1>
            <ul className="hidden w-full mr-20 md:flex justify-center">
                <li className="p-4 cursor-pointer hover:text-[#b2f5e0]">
                    <Link activeClass="active" smooth spy to="about">
                        About
                    </Link>
                </li>
                <li className="p-4 cursor-pointer hover:text-[#b2f5e0]">
                    <Link activeClass="active" smooth spy to="tutorial">
                        Tutorial
                    </Link>
                </li>
                <li className="p-4 cursor-pointer hover:text-[#b2f5e0]">
                    <Link activeClass="active" smooth spy to="cards">
                        Tech Stack
                    </Link>
                </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-out duration-500 md:hidden" : "fixed left-[-100%] md:hidden"}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">ME.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#b2f5e0]">
                        <Link activeClass="active" smooth spy to="about" onClick={resetNav}>
                            About
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#b2f5e0]">
                        <Link activeClass="active" smooth spy to="tutorial" onClick={resetNav} >
                            Tutorial
                        </Link>
                    </li>
                    <li className="p-4 cursor-pointer hover:text-[#b2f5e0]">
                        <Link activeClass="active" smooth spy to="cards" onClick={resetNav}>
                            Tech Stack
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )

}

export default Navbar