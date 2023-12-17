import React from 'react'
import './../components/styles/LoginPage.scss'
import YouTubeIcon from './../assets/image/youTubelogo.svg'
import useLogin from '../components/useLogin'

const LoginPages = () => {
  const {handleSubmit,error,handleEmailChange,handlePasswordChange}= useLogin()
  return (
    <div className='login'>
    <div className="login__container">
    <img src={YouTubeIcon} alt="you tube icon" className="login__logo" />
    <form onSubmit={handleSubmit} className="login__form">
    <h2 className="login__heading">Enter Account</h2>
    <input type="email" onChange={handleEmailChange} placeholder='Enter your email' className="login__name__input login__input" />
    {error.email && <p className="register__error__text">{error.email}</p>}
    <input type="password" onChange={handlePasswordChange} placeholder='Enter your password' className="login__name__input login__input" />
    {error.password && <p className="register__error__text">{error.password}</p>}
    <button type='submit' className="login__btn">Log in</button>
    </form>
    </div>
    </div>
    )
  }
  const LoginPage = React.memo(LoginPages)
  export default LoginPage
  