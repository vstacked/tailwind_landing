import React from "react";
import Tutorial1 from "../assets/t_1.png";
import Tutorial2 from "../assets/t_2.png";
import Tutorial3 from "../assets/t_3.png";
import Tutorial4 from "../assets/t_4.png";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Tutorial = () => {

    return (
        <section className="w-full h-[42rem] md:h-screen bg-white p-16" id="tutorial">
            <div className="flex-col w-full md:w-2/3 text-center mx-auto">
                <h2 className="text-[#00df9a] font-bold text-2xl uppercase">tutorial</h2>
                <p className="text-gray-400 font-bold text-base">Accessing localhost (XAMPP) from another computer over LAN network</p>
            </div>
            <div className="mt-10 lg:mx-32">
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop >
                    <div className="h-[450px]">
                        <img alt="" src={Tutorial1} className="h-[450px]" />
                        <p className="legend">Go to httpd.conf</p>
                    </div>
                    <div>
                        <img alt="" src={Tutorial2} className="h-[450px]" />
                        <p className="legend">Find the local IP and add it as 'Listen IP:PORT'</p>
                    </div>
                    <div>
                        <img alt="" src={Tutorial3} className="h-[450px]" />
                        <p className="legend">Go to "C:\xampp\apache\conf\extra\httpd-vhosts.conf" and add the following VHost:</p>
                    </div>
                    <div>
                        <img alt="" src={Tutorial4} className="h-[450px]" />
                        <p className="legend">Turn on Apache</p>
                    </div>
                </Carousel>
            </div>
        </section>
    )

}

export default Tutorial