import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import ExampleSug from './../assets/image/ExampleSuggestion.png'
import CustomBtn from "./CustomBtn"
import 'swiper/css';
import 'swiper/css/navigation';
import './../components/styles/SuggestedSection.scss'

const SuggestedSection = () => {
    return (
        <section className="suggested">
        <div className="suggested__container">
        <Swiper  
        slidesPerView={2.9}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        slidesPerGroupSkip={10}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper private__swiper">

        <div className="suggested__upper__box">
        <h2 className="suggested__heading">
        Recommended
        </h2>
        <CustomBtn/>
        </div>
        
        <SwiperSlide>
      <div className="link">
       <div className="suggested__video__image__box">
       <img src={ExampleSug} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       A Brief History Of Creation
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  3 days ago</span>
        <span className="suggested__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
        <SwiperSlide>
      <div className="link">
       <div className="suggested__video__image__box">
       <img src={ExampleSug} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       A Brief History Of Creation
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  3 days ago</span>
        <span className="suggested__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
        <SwiperSlide>
      <div className="link">
       <div className="suggested__video__image__box">
       <img src={ExampleSug} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       A Brief History Of Creation
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  3 days ago</span>
        <span className="suggested__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
        <SwiperSlide>
      <div className="link">
       <div className="suggested__video__image__box">
       <img src={ExampleSug} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       A Brief History Of Creation
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  3 days ago</span>
        <span className="suggested__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
        <SwiperSlide>
      <div className="link">
       <div className="suggested__video__image__box">
       <img src={ExampleSug} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       A Brief History Of Creation
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  3 days ago</span>
        <span className="suggested__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
        <SwiperSlide>
      <div className="link">
       <div className="suggested__video__image__box">
       <img src={ExampleSug} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       A Brief History Of Creation
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  3 days ago</span>
        <span className="suggested__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
   
        
        </Swiper>
        </div>
        </section>
        )
    }
    
    export default SuggestedSection
    