import style from "./slidercomponents.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardComponents } from "../CardComponents/CardComponents";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";
import ArrowRightSvg from "../svg/ArrowRightSvg";
import ArrowLeftSvg from "../svg/ArrowLeftSvg";

export const SliderComponents = () => {
  return (
    <section className={style.slider} id="blog">
      <h2> Here what pet owners have to say about Fetch! Pet Care...</h2>
      <div className={style.sliderConteiner}>
        <button className={`${style.swiper_button_prev} swiper_button_prev`}>
          <ArrowLeftSvg />
        </button>
        <button className={`${style.swiper_button_next} swiper_button_next`}>
          <ArrowRightSvg />
        </button>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={-200}
          coverflowEffect={{
            rotate: 0,
            stretch: -7,
            depth: 250,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper_button_next",
            prevEl: ".swiper_button_prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <CardComponents index={index} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
