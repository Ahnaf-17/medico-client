import Banner from "../../Shared/Banner/Banner";
import Partners from "./Partners/Partners";
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
            <Partners></Partners>
        </div>
    );
};

export default Home;