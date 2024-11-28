import React, { useState } from 'react'
import vg from '../assets/hello.png'
function Contact() {


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

  return (
    <div id='contact'>
        
        <section>
            <form action="https://formspree.io/f/xmolqznw" method="POST">
                <h2>Contact Me</h2>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" required/>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required/>
                <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your Message" required/>
                <button type="submit">Send</button>      
            </form>
        </section>
        <aside><img src={vg} alt="Graphics" className="img"/></aside>
    </div>
  )
}

export default Contact