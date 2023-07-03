import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
    <Carousel autoPlay >
        <div>
            <img
                alt=""
                src="https://images6.alphacoders.com/679/thumb-1920-679459.jpg"
            />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="https://images2.alphacoders.com/851/thumb-1920-85182.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="https://images6.alphacoders.com/875/thumb-1920-875570.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src="https://images6.alphacoders.com/114/thumb-1920-1141749.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src="https://images3.alphacoders.com/948/thumb-1920-948864.jpg" />
            <p className="legend">Legend 5</p>
        </div>
    </Carousel>
);
