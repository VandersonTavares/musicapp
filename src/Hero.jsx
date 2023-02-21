import React from 'react'

import DownloadAds from './components/DownloadAds'

function Hero() {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
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
            {/* download ads */}
            <div>
                <span className="text-[13px]">Download now on IOS and Android</span>
                <DownloadAds/>
            </div>
        </div>
        {/* right */}
        <div className="images relative w-[50%]">
            <img src={require("./img/backgraphics.png")} alt="" className='absolute top-[-8rem] left-[19rem]'/>
            <img src={require("./img/p 1.png")} alt="" className='absolute top-[-15rem] h-[34rem] left-[13rem]' />
            <img src={require("./img/p 2.png")} alt="" className='absolute top-[94px] w-[175px] left-[235px]'/>
            <img src={require("./img/p 3.png")} alt="" className='absolute top-[12rem] w-[5rem] left-[13rem]'/>
            <img src={require("./img/p 4.png")} alt="" className='absolute top-[12rem] w-[5rem] left-[12.5rem]'/>
        </div>
    </div>
  )
}

export default Hero