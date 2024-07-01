import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function MainSlider() {
  return (

    <div className="container mx-auto mt-5">

        <Swiper pagination={true} modules={[Pagination]} className="mainSlider">
        <SwiperSlide><img src="/sliderImage/slider2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/sliderImage/slider1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/sliderImage/slider3.png" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </div>

  )
}
