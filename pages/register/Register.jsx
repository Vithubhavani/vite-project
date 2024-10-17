import { useState } from "react"
import Form from "../../components/Form"

export default function Register() {
  const[formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })

  const[errors,setError]=useState({
    username:false,
    email:false,
    password:false,
    conformPassword:false
  })
  const formFields=[
    {
      type:'text',
      name:'username',
      placeholder:'Enter username',
      value:formData.username,
      onChange:(e)=>{
        setFormData({...formData,username:e.target.value})
      }  
    },
    {
      type:'email',
      name:'email',
      placeholder:'Enter email',
      value:formData.email,
      onChange:(e)=>{
        setFormData({...formData,email:e.target.value})
      }
    },
    {
      type:'password',
      name:'password',
      placeholder:'Enter password',
      value:formData.password,
      onChange:(e)=>{
        setFormData({...formData,password:e.target.value})
      }
    },
    {
      type:'conformPassword',
      name:'conformPassword',
      placeholder:'Conform password',
      value:formData.conformPassword,
      onChange:(e)=>{
        setFormData({...formData,conformPassword:e.target.value})
      }
    }
  ]

  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
    console.log(errormessage.username.isValid)
    Object.keys(errormessage).forEach((key)=>{
      if(!errormessage[key].isValid){
        errormessage[key].onError()
      }
    })

  }

  console.log(errors)

  const errormessage={
    username:{
      message:'Username is required',
      isValid:formData.username.length>0,
      onError:()=>setError((errors)=>({...errors,username:true}))
    },
    email:{
      message:'Email is required',
      isValid:formData.email.length>0,
      onError:()=>setError((errors)=>({...errors,email:true}))
    },
    password:{
      message:'Password is required',
      isValid:formData.password.length>0,
      onError:()=>setError((errors)=>({...errors,password:true}))
    },
    conformPassword:{
      message:'Conform password is required',
      isValid:formData.conformPassword===formData.password,
      onError:()=>setError((errors)=>({...errors,conformPassword:true}))
    } 

  }
  return (
 <>
 <p>Register</p>
 <Form formFields={formFields} errors={errors}   errormessage={errormessage} onSubmit={onSubmit}/>
 </>
  )
}
