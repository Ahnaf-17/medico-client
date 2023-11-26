import { useEffect, useRef, useState } from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data=> setReviews(data))
    },[])



    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }

    return (
        <>
            <SectionHeading heading='Testimonials'></SectionHeading>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
            reviews.map(review=> <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center mx-24 my-16">
                            
                            <p className="py-8">{review.feedback}</p>
                            <h3 className="text-2xl text-orange-400">{review.campName}</h3>
                            <Rating style={{ maxWidth: 150 }} value={review.rating} readOnly />
                        </div>
            </SwiperSlide>)
        }
        <div className="autoplay-progress" slot="container-end">

          <span ref={progressCircle}></span>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </>
    );
};

export default Testimonials;