'use client';
import React from 'react';

const VideoSection = () => {
  return (
    <div className="border-2 border-white/20 rounded-2xl backdrop-blur-md bg-white mx-8 my-4 min-h-[90vh] w-[95%] relative overflow-hidden">
      <div className="px-16 py-16 sm:px-20 lg:px-24">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <video
            className="w-full h-full object-cover"
            controls
          >
            <source src="/videos/Lnct.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection; 