import React from 'react'
import data from '../assets/data.json'

function Timeline() {
  return (
    <div id='timeline'>
        <div className='timelineBox'>
            {
                data.projects.map((i,index)=>{
                    return (
                        <TimelineItem key={i.title} heading={i.title} text={i.date} index={index} />
                    )
                })
            }

        </div>
    </div>
  )
}

const TimelineItem = ({heading,text,input,index}) => {
    return (
        <div className={`timelineItem ${index % 2 === 0 ? 'leftTimeline' : 'rightTimeline'}`}>
            <h2>{heading}</h2>
            <p>{text}</p>
            
        </div>
    )
}
export default Timeline