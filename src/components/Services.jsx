import { motion } from 'framer-motion'
import React from 'react'
import {AiFillIeCircle} from 'react-icons/ai'

function Services() {

    const animations = {
        whileInView: {
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:1,
            x:"-100%",
        },
        twoAndThree:{
            opacity:1,
            y:"-100%",
        },
        four:{
            opacity:1,
            x:"100%",
            
        },
    }


  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className='servicesBox1'
            whileInView={animations.whileInView} 
            initial={animations.one}>
                <h3>2+</h3>
                <p>Years Experience</p>

            </motion.div>
            <motion.div className='servicesBox2' 
            whileInView={animations.whileInView} 
            initial={animations.twoAndThree}>
                <AiFillIeCircle/>
                <span>Fullstack Web Development</span>
                
            </motion.div>
            <motion.div className='servicesBox3' 
            whileInView={animations.whileInView} 
            initial={animations.twoAndThree}
            transition={{
                delay: 0.2,
            }}>
                <AiFillIeCircle/>
                    <span>Version Control</span>
                
            </motion.div>
            <motion.div className='servicesBox4' 
            whileInView={animations.whileInView} 
            initial={animations.four}>
                <AiFillIeCircle/>
                <span>API Integration</span>
              
                
            </motion.div>

        </section>
        
    </div>
  )
}

export default Services