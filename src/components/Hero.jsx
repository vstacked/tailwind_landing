
import React from "react";
import Typed from 'react-typed';

const Hero = () => {

    return (
        <div className="text-white">
            <div className="max-w-full mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <p className="text-[#00df9a] font-bold p-2 uppercase">landing page</p>
                <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">Hi.</h1>
                <div className="md:flex justify-center items-center py-4">
                    <p className="md:text-3xl sm:text-2xl text-xl font-bold">Allow me to introduce myself, I am</p>
                    <Typed className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2" strings={['Muh Rizki N']} typeSpeed={90} backSpeed={100} loop />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-300">I come from Duta Bangsa University.</p>
                <button className="bg-[#00df9a] w-[125px] md:w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">My Profile</button>
            </div>
        </div>
    );
}

export default Hero