import React, { useRef } from 'react'
import {animate, delay, motion} from 'framer-motion'
import  Typewriter  from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/goti-removebg-preview.png'
const Home = () => {

  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = ()=>{
    animate(0,25,{
      duration:1,
      onUpdate:(v)=>clientCount.current.textContent=v.toFixed()
    })
  }
  const animationProjectCount =()=>{
    animate(0,50,{
      duration:1,
      onUpdate:(v)=>projectCount.current.textContent=v.toFixed()
    })
  }

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
        transition: { duration:0.3}
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
   }

  return (
    <div id="home">
      <section>
        <div>
        <motion.h1 {...animation.h1
          
        }> 
        Hi, I'm <br></br>Paras Sareen 
       </motion.h1>
       <Typewriter options={{
        strings: ["A Developer", "A Designer", "A Creator"],
        autoStart: true,
        loop: true,
        wrapperClassName: "typewriterpara",
        cursor: ""
       }}></Typewriter>
       <div>
        <a href='mailto:kyakrnahaibro@gmail.com'>Hire Me </a>
        <a href='#work'> Projects <BsArrowUpRight/></a>
       </div>
       <article>
        <p>
          +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
        </p>
        <span>Clients Worldwide</span>
       </article>
       <aside>
        <article>
          <p>
            +<motion.span ref={projectCount} whileInView={animationProjectCount}></motion.span>
          </p>
          <span>Projects Completed</span>
        </article>
        <article data-special>
          <p>
            Contact
          </p>
          <span>kyakrnahaibro@gmail.com</span>
        </article>
       </aside>

        </div>
       
      </section>
      <section>
        <img src={me} alt="Paras" />
      </section>
      <BsChevronDown /> 
    </div>
  )
}

export default Home