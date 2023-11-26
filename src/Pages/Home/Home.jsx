import Banner from "../../Shared/Banner/Banner";
import PopularCamp from "./PopularCamp/PopularCamp";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;