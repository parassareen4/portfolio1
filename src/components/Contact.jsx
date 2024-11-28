import React from 'react'
import vg from '../assets/hello.png'
function Contact() {
  return (
    <div id='contact'>
        
        <section>
            <form action="https://formspree.io/f/xmolqznw" method="POST">
                <h2>Contact Me</h2>
                <input type='text' placeholder="Your Name" required/>
                <input type='email' placeholder="Your Email" required/>
                <input type='text' placeholder="Your Message" required/>
                <button type="submit">Send</button>      
            </form>
        </section>
        <aside><img src={vg} alt="Graphics" className="img"/></aside>
    </div>
  )
}

export default Contact