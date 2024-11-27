import React from 'react'
import {motion} from 'framer-motion'
import  Typewriter  from 'typewriter-effect'
import {BsArrowUpRight } from 'react-icons/bs'
const Home = () => {

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
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
        <motion.h1 {...animation.h1}> 
        Hi, I'm <br></br>Paras Sareen 
       </motion.h1>
       <Typewriter options={{
        strings: ["A Developer", "A Designer", "A Creator"],
        autoStart: true,
        loop: true,
        wrapperClassName: "typewriterpara",
       }}></Typewriter>
       <div>
        <a href='mailto:kyakrnahaibro@gmail.com'>Hire Me </a>
        <a href='#work'> Projects <BsArrowUpRight/></a>
       </div>
       <article>
        <p>
          +<span>100</span>
        </p>
        <span>Clients Worldwide</span>
       </article>
       <aside>
        <article>
          <p>
            +<span>500</span>
          </p>
          <span>Projects Completed</span>
        </article>
       </aside>
      </section>
      <section></section>
    </div>
  )
}

export default Home