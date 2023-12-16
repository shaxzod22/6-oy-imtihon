
import PrivateChannelIcon from './../assets/image/privateChannelIcon.jpg'
import CustomBtn from "./CustomBtn";

const PrivateCustomButtonsBox = () => {

  return (
    <div className="private__upper__box">
    <div className="private__title__box">
    <img src={PrivateChannelIcon} alt="account avatar" className="private__avagtar__img" width={50} height={50} />

    <h2 className="private__account__name">
    The Gecko
    </h2>
    
    </div>
    
    
    <CustomBtn/>
    </div>
    )
  }
  
  export default PrivateCustomButtonsBox
  