import React from 'react'
import { Feature } from './Feature'

export const Experience = () => {
  return (
    <div className="experience-section flex flex-col items-center justify-start p-5 bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] z-[2] rounded-b-[5rem]">
        {/* titld icon */}
        <img src={require('../img/Path 318.png')} alt="" className='w-[5rem]'/>
        {/* heading */}
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
                <b>Music Experience</b>
            </span>
        </div>
        {/* features */}
        <div className="features flex items-center justify-around mt-[6rem]">
            <Feature icon='Group 2' title='For Live Music'/>
            <Feature icon='music icon' title='For Daily Music'/>
            <Feature icon='Group 4' title='For Artists'/>
        </div>
    </div>
  )
}
