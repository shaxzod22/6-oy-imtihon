import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import PrivateCustomButtonsBox from './PrivateCustomButtonsBox';
import Example from './../assets/image/forexample.png'
import 'swiper/css';
import 'swiper/css/navigation';

const PrivateSection = () => {
  return (
    <section className="private">
    <div className="private__container">
    <Swiper  
    slidesPerView={5.8}
    spaceBetween={30}
    loop={true}
    centeredSlides={false}
    slidesPerGroupSkip={10}
    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    className="mySwiper private__swiper">
    <PrivateCustomButtonsBox/>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="private__video__image__box">
       <img src={Example} alt="sd" width={250} height={150} className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       A Brief History Of Creation
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  3 days ago</span>
        <span className="private__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    </Swiper>
    </div>
    
    
    
    </section>
  )
}

export default  PrivateSection
