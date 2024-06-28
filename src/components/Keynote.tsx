import React from "react";
import VideoCard from "./common/VideoCard";

const Keynote = () => {
  return (
    <div className="flex flex-col items-center px-32 mt-10">
      <div className="flex flex-row justify-between gap-5">
        <VideoCard
          image="/io24-featured-keynote-recap-videos.webp"
          title="Watch the recap videos"
          link="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk"
        />
        <VideoCard
          image="/io24-featured-keynote-recap.webp"
          title="Google keynote"
          link="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk"
        />
        <VideoCard
          image="/io24-featured-keynote-recap-developer.webp"
          title="Developer Keynote"
          link="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk"
        />
      </div>
    </div>
  );
};

export default Keynote;
