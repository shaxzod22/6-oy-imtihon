import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import imageChannel from './../assets/image/foodDrink.png'
import './../components/styles/VideoPlay.scss'
import useFetch from "./useFetch";

const VideoPlay = () => {
    const {videoId}=useParams()
    const data = useFetch('recommended')
    return (
        <main className="main">
        <section className="videoPlay">
        <div className="videoPlay__container">
        <div className="video__box">
        <iframe className="video__iframe" height={700} src={`https://www.youtube.com/embed/${videoId}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h2 className="video__heading">4K African Animals</h2>
        <div className="video__likes__box">
        <p className="video__views__title">123k views</p>
        <div className="video__likes__btn__box">
        <button className="video__likes__btn">
        <AiOutlineLike className="video__like__btn__icon"/>
        123k
        </button>
        <button className="video__likes__btn">
        <AiOutlineDislike className="video__like__btn__icon"/>
        435k
        </button>
        <button className="video__likes__btn">
        <IoMdShareAlt className="video__like__btn__icon"/>
        Share
        </button>
        <button className="video__more__btn">
        <MdMoreHoriz className="video__more__btn__icon" />
        </button>
        </div>
        </div>
        </div>
        <div className="video__comment__box">
        <div className="video__comment__left__side">
        <img src={imageChannel} alt="channel icon" width={80} height={80} className="video__channel__image" />
        <div className="video__comment__inner__box">
        <h2 className="video__channel__name">Food & Drink</h2>
        <p className="video__published__date">Published on 14 Jun 2019</p>
        <p className="video__comment__title">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer`s mood when they see your ad. </p>
        
        <button className="video__comment__showMore__btn">Show more</button>
        </div>
        </div>
        <button className="video__subs__btn">Subscribe 2.3m</button>
        </div>
        </div>
        </section>
        
        <section className="nextVideo">
        <div className="nextVideo__container">
        <div className="nextVideo__title__box">
        <h2 className="nextVideo__heading">
        Next
        </h2>
        <button className="nextVideo__turn__btn">
        Autoplay <span className="nextVideo__blue__circle"></span>
        </button>
        </div>
        <div className="nextVideo__list">
       {data?data.map((card,index)=>(
        card.id.videoId? <Link key={index} to={`/video/${card.id.videoId}`} className="nextVideo__item ">
        
         <div className="nextVideo__video__image__box">
         <img src={card.snippet.thumbnails.medium.url} alt="account icon" className="nextVideo__video__img" />
         <p className="nextVideo__video__duration">4:15</p>
         </div>
         <h3 className="nextVideo__video__name">
         {card.snippet.title.length>=24?`${card.snippet.title.slice(0,24)}...`:card.snippet.title}
         </h3>
         <div className="nextVideo__more__info__box">
         <span className="nextVideo__video__when__down">80k views</span>
         <span className="nextVideo__video__who__down">{card.snippet.channelTitle
}</span>
         </div>
        
         </Link>:''
       )):''}
   
       
        </div>
        </div>
        </section>
        </main>
        )
    }
    
    export default VideoPlay
    