import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Partners = () => {
    return (
        <>
            <div className="mt-4">
            <SectionHeading heading='supporting partners'></SectionHeading>
            </div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/p10mzbx/logo-png.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/yfLts0n/logo-png.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/yRTsfZR/logo-png.png" alt="" /></SwiperSlide>
      </Swiper>
        </>
    );
};

export default Partners;