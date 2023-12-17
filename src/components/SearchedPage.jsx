import { Link } from "react-router-dom"
import useFetch from "./useFetch"
import './../components/styles/SearchedSection.scss'

const SearchedPage = () => {
    const data = useFetch()
    let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let date = new Date().getDate()
  return (
    <section className="searched">
      <div className="searched__container">
        <ul className="searched__list">
       {data?data.map((card,index)=>(
         <Link to={`/video/${card.id.videoId}`} key={index} className="searched__item">
         <div className="searched__item">
         <img src={card.snippet.thumbnails.medium.url} alt="account icon" className="searched__video__img" />
         <p className="searched__video__duration">4:15</p>
         </div>
         <h3 className="searched__video__name">
         {card.snippet.title.length>=24?`${card.snippet.title.slice(0,24)}...`:card.snippet.title}
         </h3>
         <div className="searched__more__info__box">
          <span className="searched__video__when__down">80k views  ·  {year-Number(card.snippet.publishTime.slice(0,4))>1?`${year-Number(card.snippet.publishTime.slice(0,4))} years ago`:year-Number(card.snippet.publishTime.slice(0,4)) ==1? `1 year ago`:month-Number(card.snippet.publishTime.slice(5,7))>0?`${month-Number(card.snippet.publishTime.slice(5,7))} months ago`:date-Number(card.snippet.publishTime.slice(8,10))>0?`${date-Number(card.snippet.publishTime.slice(8,10))} days ago`:'today'}</span>
          <span className="searched__video__who__down">The Gecko</span>
         </div>
        </Link>
       )):''}
        </ul>
      </div>
    </section>
  )
}

export default SearchedPage
