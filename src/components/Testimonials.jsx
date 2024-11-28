import React from 'react'

function Testimonials() {
  return (
    <div id='testimonials'>
        <h2>Testimonials</h2>
        <section>
            <TestimonialCard name={"Paras"} feedback={"The Chat app was really helpful and easy to use. I would recommend it to anyone."} image={"https://avatars.githubusercontent.com/u/10198778?v=4"}/>
            
           {/* <Testimonial /> */}
        </section>
    </div>
  )
}

const TestimonialCard=({name,feedback,image})=>{
    return(
        <article>
            <img src={image} alt="user"/>
            
                <h4>{name}</h4>
                <p>{feedback}</p>
            
       </article>
    )
}

export default Testimonials