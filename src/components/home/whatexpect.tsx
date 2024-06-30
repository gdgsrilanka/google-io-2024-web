import React from 'react'
import VideoCard from '../common/VideoCard'

const WhatToExpect = () => {
  return (
    <div className='container mt-20 '>
        <div className='flex items-start'>
            <h1 className='text-grey text-6xl'>What to Expect</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
        <VideoCard
          image="https://services.google.com/fh/files/events/ioconnectexplore.png"
          title="Explore"
          desc='Join technical sessions and Q&As to help you apply the latest announcements from Google I/O Extended.'
          
        />
        <VideoCard
          image="https://services.google.com/fh/files/events/ioconnectlearn.png"
          title="Learn"
          desc='Get hands-on with instructor-led workshops and check out the latest demos.'
          
        />
        <VideoCard
          image="https://services.google.com/fh/files/events/ioconnectconnect.png"
          title="Connect"
          desc='Sign up to network with the people who build the technology you love. You can also expand your network and meet with other developers from Sri Lanka'
          
        />
      </div>
    </div>
  )
}

export default WhatToExpect