import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import CustomBtn from "./CustomBtn"
import 'swiper/css';
import 'swiper/css/navigation';
import './../components/styles/SuggestedSection.scss'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const SuggestedSection = () => {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let date = new Date().getDate()
  const data = useFetch('suggested')
  console.log(data);
    return (
        <section className="suggested">
        <div className="suggested__container">
        <Swiper  
        slidesPerView={2.9}
        spaceBetween={30}
        loop={data.length>=6?true:false}
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
        {data?  data.map((card,index)=>(
      card.id.videoId? <SwiperSlide key={index}>
      <Link to={`/video/${card.id.videoId}`} className="link">
       <div className="suggested__video__image__box">
       <img src={card.snippet.thumbnails.medium.url} alt="account icon" width={250} height={150} className="suggested__video__img" />
       <p className="suggested__video__duration">4:15</p>
       </div>
       <h3 className="suggested__video__name">
       {card.snippet.title.length>=24?`${card.snippet.title.slice(0,24)}...`:card.snippet.title}
       </h3>
       <div className="suggested__more__info__box">
        <span className="suggested__video__when__down">80k views  ·  {year-Number(card.snippet.publishTime.slice(0,4))>1?`${year-Number(card.snippet.publishTime.slice(0,4))} years ago`:year-Number(card.snippet.publishTime.slice(0,4)) ==1? `1 year ago`:month-Number(card.snippet.publishTime.slice(5,7))>0?`${month-Number(card.snippet.publishTime.slice(5,7))} months ago`:date-Number(card.snippet.publishTime.slice(8,10))>0?`${date-Number(card.snippet.publishTime.slice(8,10))} days ago`:'today'}</span>
        <span className="suggested__video__who__down">{card.snippet.channelTitle
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
    
    export default SuggestedSection
    