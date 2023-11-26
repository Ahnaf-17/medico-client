import Banner from "../../Shared/Banner/Banner";
import PopularCamp from "./PopularCamp/PopularCamp";
import Testimonials from "./Testimonials/Testimonials";
import UpcomingCamps from "./UpcomingCamps/UpcomingCamps";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Testimonials></Testimonials>
            <UpcomingCamps></UpcomingCamps>
        </div>
    );
};

export default Home;