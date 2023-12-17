import React from 'react'
import YouTubeIcon from './../assets/image/youTubelogo.svg'
import './../components/styles/RegisterPage.scss'
import useRegister from '../components/useRegister'

const RegisterPages = () => {
  const {error,handleSubmit,handleNameChange,handleEmailChange,handlePasswordChange} = useRegister()
  return (
    <div className='register'>
      <div className="register__container">
        <img src={YouTubeIcon} alt="you tube icon" className="register__logo" />
       <form onSubmit={handleSubmit} className="register__form">
       <h2 className="register__heading">Create Account</h2>
        <input type="text" onChange={handleNameChange} placeholder='Enter your name' className="register__name__input register__input" />
        {error.firstName && <p className="register__error__text">{error.firstName}</p>}
        <input type="text" onChange={handleEmailChange} placeholder='Enter your email' className="register__name__input register__input" />
        {error.email && <p className="register__error__text">{error.email}</p>}
        <input type="password" onChange={handlePasswordChange} placeholder='Enter your password' className="register__name__input register__input" />
        {error.password && <p className="register__error__text">{error.password}</p>}
        <button type='submit' className="register__btn">Create</button>
       </form>
      </div>
    </div>
  )
}
const RegisterPage = React.memo(RegisterPages)
export default RegisterPage
