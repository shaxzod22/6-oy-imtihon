import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({
        password:'',
        email:'',
    })
    
    const checkEmail = (email)=>{
        return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)?true:false)
    }
    
    const checkPassword = (password)=>{
        return(password.length<6?false:true)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        let formValid = true
        const userRegister = JSON.parse(localStorage.getItem('userRegister'))
        const updateError ={
            email:checkEmail(email)?'':'Enter valid email!',
            password:checkPassword(password)?'':'Password should be more than 6 signs!',
        } 
        
        Object.keys(updateError).forEach((key)=>{
            if(updateError[key]){
                formValid = false
            }
        })
        
        if(!formValid){
            setError(updateError)
            return
        }
        
        if(userRegister.email ==email && userRegister.password ==password){
            navigate('/')
            const userLogin ={
                email,
                password,
            }

            localStorage.setItem('userLogin',JSON.stringify(userLogin))
        }else{
            const checkMatchingEmail = (email)=>{
                return (userRegister.email ==email?true:false)
            }
            const checkMatchingPassword = (password)=>{
                return (userRegister.password ==password?true:false)
            }
            const matchingError ={
                email:checkMatchingEmail(email)?'':'Email did not match!',
                password:checkMatchingPassword(password)?'':'Password did not match!',
            } 
            
            setError(matchingError)
            return
        }
        
    }
    
    return {handleSubmit,error,handleEmailChange:(e)=>{
        setEmail(e.target.value.trim())
    },
    handlePasswordChange:(e)=>{
        setPassword(e.target.value.trim())
    }
}
}

export default useLogin
