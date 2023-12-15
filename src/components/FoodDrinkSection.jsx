import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Example from './../assets/image/forexample.png'
import Food from './../assets/image/foodDrink.png'
import 'swiper/css';
import 'swiper/css/navigation';
import './../components/styles/FoodDrinkSection.scss'
import CustomBtn from './CustomBtn';

const FoodDrinkSection = () => {
  return (
    <section className="food">
      <div className="food__container">
      <Swiper  
    slidesPerView={5.8}
    spaceBetween={30}
    loop={true}
    centeredSlides={false}
    slidesPerGroupSkip={10}
    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    className="mySwiper private__swiper">
    <div className="private__upper__box">
    <div className="private__title__box">
    <img src={Food} alt="account avatar" className="private__avagtar__img" width={50} height={50} />

    <h2 className="food__account__name">
    Food & Drink
    </h2>

    <p className="food__chanel__title">Recommended channel for you</p>
    
    </div>
    
    
    <div className="food__custom__btn__wrapper">
        <button className="food__subs__btn">Subscribe 2.3m</button>
    <CustomBtn/>
    </div>
    </div>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="link">
       <div className="food__video__image__box">
       <img src={Example} alt="account icon" width={250} height={150} className="food__video__img" />
       <p className="food__video__duration">4:15</p>
       </div>
       <h3 className="food__video__name">
       A Brief History Of Creation
       </h3>
       <div className="food__more__info__box">
        <span className="food__video__when__down">80k views  ·  3 days ago</span>
        <span className="food__video__who__down">Dollie Blair</span>
       </div>
      </div>
    </SwiperSlide>
  
    </Swiper>
      </div>
    </section>
  )
}

export default FoodDrinkSection
