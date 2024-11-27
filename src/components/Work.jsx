import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import data from '../assets/data.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Work() {
  return (
    <div id="work">
        <h2>Work</h2>
        <section>
            <article>
                <Carousel 
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={2000}
                    autoPlay={true}
                    infiniteLoop={true} 
                >

                    {
                        data.projects.map((i)=>{
                            return (
                                <div key={i.title} className='workItem'>
                                    <img src={i.imgSrc} alt="i.title" />
                                    <aside>
                                        <h3>{i.title}</h3>
                                        <p>{i.description}</p>
                                        <a target={"blank"} href={i.url}>View Demo</a>
                                    </aside>
                                </div>
                            )
                        })
                    }

                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work