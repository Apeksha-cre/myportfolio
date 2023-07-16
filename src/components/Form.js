import './FormStyle.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text' placeholder='Apeksha Shah'/>

            <label>Email</label>
            <input type='email' placeholder='ex.apeksha@gmail.com'/>

            <label>Subject</label>
            <input type='text' placeholder='want to meet you'/>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'/>

            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form