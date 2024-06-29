import React from 'react'
interface ImageCardI{
    title:string;
    no:number
}

const ImageCard = ({ title , no}:ImageCardI) => {
  return (
    <div className="relative card">
    <img
      src="https://io.gdgbaku.az/_nuxt/stat-1.B7S4wg37.png"
      alt=""
      className=" w-full h-[250px] object-cover"
    />
    <div className="absolute inset-0 flex  w-full  h-full flex-col items-center justify-center text-black px-5 py-10">
      <p className='text-4xl'>{no}+</p>
      <h4>{title}</h4>
    </div>
  </div>
  )
}

export default ImageCard