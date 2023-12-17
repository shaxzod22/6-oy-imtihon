import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import useFetch from './useFetch';
import Food from './../assets/image/foodDrink.png'
import 'swiper/css';
import 'swiper/css/navigation';
import './../components/styles/FoodDrinkSection.scss'
import CustomBtn from './CustomBtn';
import { Link } from 'react-router-dom';

const FoodDrinkSection = () => {
  const data = useFetch('food&drink')
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let date = new Date().getDate()
  console.log(data);
  return (
    <section className="food">
      <div className="food__container">
      <Swiper  
    slidesPerView={5.8}
    spaceBetween={30}
    loop={data.length>=6?true:false}
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
    {data?  data.map((card,index)=>(
    card.id.videoId?  <SwiperSlide key={index}>
    <Link to={`/video/${card.id.videoId}`} className="link">
     <div className="food__video__image__box">
     <img src={card.snippet.thumbnails.medium.url} alt="account icon" width={250} height={150} className="food__video__img" />
     <p className="food__video__duration">4:15</p>
     </div>
     <h3 className="food__video__name">
     {card.snippet.title.length>=24?`${card.snippet.title.slice(0,24)}...`:card.snippet.title}
     </h3>
     <div className="food__more__info__box">
      <span className="food__video__when__down">80k views  ·  {year-Number(card.snippet.publishTime.slice(0,4))>1?`${year-Number(card.snippet.publishTime.slice(0,4))} years ago`:year-Number(card.snippet.publishTime.slice(0,4)) ==1? `1 year ago`:month-Number(card.snippet.publishTime.slice(5,7))>0?`${month-Number(card.snippet.publishTime.slice(5,7))} months ago`:date-Number(card.snippet.publishTime.slice(8,10))>0?`${date-Number(card.snippet.publishTime.slice(8,10))} days ago`:'today'}</span>
      <span className="food__video__who__down">{card.snippet.channelTitle
}</span>
     </div>
    </Link>
  </SwiperSlide>:''
)):''}
    
    
  
    </Swiper>
      </div>
    </section>
  )
}

export default FoodDrinkSection
