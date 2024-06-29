import React from "react";
import ImageCard from "../common/imageCard";

const Stats = () => {
  return (
    <div className="container mt-10 rounded-2xl border-[1px] border-border px-5 py-10 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-5 w-full md:w-2/5">
        <h2 className="text-5xl font-normal">Occuring in the near future</h2>
        <p className="font-thin text-sm">
          Google I/O Extended brings the excitement of Google I/O directly to
          community. Join I/O Extended for the latest developer updates,
          technical talks from experts, networking, and hands-on learning.
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row gap-5 mt-5 md:mt-0">
        <ImageCard title="Speakers" no={5}/>
        <ImageCard title="Participants" no={100}/>
        <ImageCard title="Sessions" no={5}/>
        <ImageCard title="Workshops" no={1}/>
      </div>
    </div>
  );
};

export default Stats;
