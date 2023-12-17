import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
    const navigate = useNavigate()
    const [firstName,setFirstName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({
        firstName:'',
        email:'',
        password:'',
    })
    
    
    const checkEmail = (email)=>{
        return(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)?true:false)
    }

    const checkPassword = (password)=>{
        return (password.length<6?false:true)
    }


    
    
    function handleSubmit(e){
        e.preventDefault()
        let formValid = true
        
        const updateError ={
            firstName : firstName?'':'Name should be entered!',
            email: checkEmail(email)?'':'Enter valid email!',
            password: checkPassword(password)?'':'Password should be more than 6 signs!',
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
        let userRegister = {
            email,
            password,
        }
        localStorage.setItem('userRegister',JSON.stringify(userRegister))
        e.target.reset()
        navigate('/login')
    }
    
    return{
        firstName,email,password,error,handleSubmit,handleNameChange:(event)=>{
            setFirstName(event.target.value.trim())
        },handleEmailChange:(event)=>{
            setEmail(event.target.value.trim())
        }, handlePasswordChange:(event)=>{
            setPassword(event.target.value.trim())
        }
    }
}

export default useRegister
