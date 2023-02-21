import React from 'react'

function Hero() {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
        {/* left */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span>Experience The</span>{" "}
            <span>
                <b>Best Quality Music</b>
            </span>
            <span className="text-[15px] text-[#525D6E]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
        </div>
        {/* right */}
        <div className="images">Images</div>
    </div>
  )
}

export default Hero