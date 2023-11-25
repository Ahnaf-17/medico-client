


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (

    <Carousel>
                <div>
                    <img src="https://i.ibb.co/vDZ0b4z/The-Medical-Camp-Was-Organised-At-Keshampet-1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/ZKxLHGj/1018569-medical-camp.webp" />
                </div>
                {/* <div>
                    <img src="https://i.ibb.co/P6brDw2/compressed.jpg" />
                </div> */}
            </Carousel>


    );
};

export default Banner;