import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Logo from './../assets/image/youTubelogo.svg'
import Camera from './../assets/image/cameraVideo.png'
import More from './../assets/image/moreIcon.png'
import Bell from './../assets/image/bell.png'
import AccountImage from './../assets/image/Userpic.png'
import './styles/Header.scss'

const Header = () => {
    
    return (
        <header className="header">
        <div className="header__container">
        <AiOutlineMenu className="header__menu__burger" />
        
        <a href="/" className="header__logo__link">
        <img src={Logo} alt="logo" width={116} height={25} className="header__logo" />
        </a>
        
        <form className="header__form">
        <input type="text" placeholder="Search" className="header__search__input" />
        <button className="header__search__btn"><FiSearch className="header__search__btn__icon" /></button>
        </form>
        
        <ul className="header__more__list">
        <li className="header__more__item">
        <img src={Camera} alt="camera icon" width={27} height={20} className="header__camera__Icon" />
        </li>
        <li className="header__more__item">
        <img src={More} alt="more icon" width={21} height={21} className="header__more__Icon" />
        </li>
        <li className="header__more__item__bell">
            <span className="header__bell__title">3</span>
        <img src={Bell} alt="bell icon" width={22} height={26} className="header__bell__Icon" />
        </li>
        <li className="header__more__item">
        <img src={AccountImage} alt="Account icon" width={40} height={40} className="header__account__Icon" />
        </li>
        </ul>
        </div>
        
        </header>
        )
    }
    
    export default Header
    