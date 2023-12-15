import { useSwiper } from "swiper/react"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const CustomBtn = () => {
    const swiper = useSwiper()
  return (
    <div className="private__custom__btn__box">
    <button 
    className="private__custom__btn"  
    onClick={()=>swiper.slidePrev()}>
      <GrFormPrevious className="private__navigation__icon" />
      </button>
    <button className="private__custom__btn" onClick={()=>swiper.slideNext()}><MdNavigateNext className="private__navigation__icon" /></button>
    </div>
  )
}

export default CustomBtn
