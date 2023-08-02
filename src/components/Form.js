
import './FormStyle.css'

import React, { useState } from 'react'

function Form() {


  const[uname,setuname]=useState("");
  const[email,setemail]=useState("");
  const[subject,setsubject]=useState("");
  const[message,setmessage]=useState("");

  const user={uname,email,subject,message}
  const [formError,setFormError]=useState({});

  const handleClick = (e)=>
  {
    e.preventDefault()
    setFormError(validate(user));
    console.log(formError);
    console.log(user)
    fetch("http://localhost:8080/save",
    {method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)})
    

    .then(()=>{console.log("submitted")})

    console.log("submitted!!")
    

  }

  const validate=(user)=>{
    const error={};
    const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!user.uname){
      error.uname="Full name is required!";
    }

    if(!user.email){
      error.email="Email is required!";
    }else if(!regex.test(user.email))
    {
      error.email="email should be in a correct formate!";
    }

    if(!user.subject){
      error.subject="Subject is required!";
    }

    if(!user.message){
      error.message="Message is required!";
    }
    return error;

  }

  return (
    <div className='form'>
        <form>
            
            <label>Your Name</label>
            <p>{formError.uname}</p>
            <input type='text' value={uname} onChange={(e)=>setuname(e.target.value)} placeholder='Apeksha Shah'/>
            
            
            <label>Email</label>
            <p>{formError.email}</p>
            <input type='email' value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='ex.apeksha@gmail.com'/>
           

           
            <label>Subject</label>
            <p>{formError.subject}</p>
            <input type='text' value={subject} onChange={(e)=>setsubject(e.target.value)} placeholder='want to meet you'/>
            

            
            <label>Message</label>
            <p>{formError.message}</p>
            <textarea rows="6" value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Type your message here'/>
            


            <button className='btn' onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default Form;