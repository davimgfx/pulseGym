import React from 'react'

const StarterBanner = ({title}) => {
  return (
        <div className='start-banner-section'>
            <div className='container-start-banner pb-[2rem]'>
                <h1 className='text-white text-center pt-[18rem] text-[3rem] font-bold'>{title}</h1>
                <div className="h-[0.4rem] bg-[#fffb03] my-[0.1rem] rounded max-w-[12rem] mx-[auto]"></div>
            </div>
        </div>
  )
}

export default StarterBanner