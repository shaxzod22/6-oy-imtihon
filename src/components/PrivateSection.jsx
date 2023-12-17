
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import useFetch from './useFetch';
import PrivateCustomButtonsBox from './PrivateCustomButtonsBox';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const PrivateSection = () => {
  const data = useFetch('animals')
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let date = new Date().getDate()
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <section className="private">
    <div className="private__container">
    <Swiper  
    slidesPerView={5.8}
    spaceBetween={30}
    loop={data.length>=6?true:false}
    centeredSlides={false}
    slidesPerGroupSkip={20}
    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    className="mySwiper private__swiper">
    <PrivateCustomButtonsBox/>
{data?  data.map((card,index)=>(
     card.id.videoId?  <SwiperSlide key={index}>
      <Link to={`/video/${card.id.videoId}`} className="link">
       <div className="private__video__image__box">
       <img src={card.snippet.thumbnails.medium.url} alt="account icon" className="private__video__img" />
       <p className="private__video__duration">4:15</p>
       </div>
       <h3 className="private__video__name">
       {card.snippet.title.length>=24?`${card.snippet.title.slice(0,24)}...`:card.snippet.title}
       </h3>
       <div className="private__more__info__box">
        <span className="private__video__when__down">80k views  ·  {year-Number(card.snippet.publishTime.slice(0,4))>1?`${year-Number(card.snippet.publishTime.slice(0,4))} years ago`:year-Number(card.snippet.publishTime.slice(0,4)) ==1? `1 year ago`:month-Number(card.snippet.publishTime.slice(5,7))>0?`${month-Number(card.snippet.publishTime.slice(5,7))} months ago`:date-Number(card.snippet.publishTime.slice(8,10))>0?`${date-Number(card.snippet.publishTime.slice(8,10))} days ago`:'today'}</span>
        <span className="private__video__who__down">The Gecko</span>
       </div>
      </Link>
    </SwiperSlide>:''
)):''}
    </Swiper>
    </div>
    
    
    
    </section>
  )
}

export default  PrivateSection
