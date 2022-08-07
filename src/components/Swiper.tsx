// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import suleiman from '../assets/images/suleiman.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../styles/styles.css";
import { EffectCards } from "swiper";
const SwiperComponent = () => {
   const dummyArray = [1,2,3,4,5,6];
   return (
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            dummyArray.map((_, idx) => (
                <SwiperSlide className="swiper-slide relative" key = {idx}>
                    <div className="">
                        <img src={suleiman} alt="senator" className=" absolute mx-auto left-1/2 -translate-x-1/2 -top-[45px] " />
                        <h3 className="text-center text-base font-bold mt-12">Suleiman Abdullahi</h3>
                        <h4 className="text-center font-medium mb-2">Lead, Designer</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci 
                            lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. 
                            Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse 
                            sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue 
                            sit cursus pellentesque enim 
                        </p>
                    </div>
                </SwiperSlide>
            ))
        }
     
      </Swiper>
  )
}

export default SwiperComponent
