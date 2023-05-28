import React from "react";

function ReviewItem({ name, description, image_url, position, onNextClick, onPreviousClick, onRandomClick }) {
  return (
    <div className=" sm:text-lg text-sm flex justify-center">
      <div className="  border-[1px] border-gray-300 bg-white/10 select-none h-[31pc]
       shadow-[0_20px_60px_15px_rgba(0,0,0,0.3)] p-3 items-center w-[21pc] sm:w-[40pc] mx-6 mt-20 rounded-2xl flex flex-col text-center">
        <div className="relative">
          <div className=" rounded-full p-4 bg-white absolute top-3 right-8 z-20">
            <svg
              className=" fill-red-500"
              stroke="currentColor"
              fill="bg-blue-500"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </div>
          <div className=" -top-1 -left-[71px] absolute w-40 h-40 bg-red-500 rounded-full fill"></div>
        </div>
        <img
          className=" z-10 w-40 h-40 rounded-full object-cover"
          src={image_url}
          alt="alt"
        />
        <div className="mt-2">
          <h1 className=" text-white">{name}</h1>
        </div>
        <div>
          <h2 className=" mt-2 text-white uppercase">{position}</h2>
        </div>
        <div>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex gap-5 mt-4">
          <div className="w-4" role="button" onClick={onPreviousClick}>
            <svg
              className=" fill-cyan-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="w-4 " role="button" onClick={onNextClick}>
            <svg
              className=" fill-cyan-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </div>
        <button onClick={onRandomClick}
         className=" select-none p-2 mt-6 w-44 rounded-xl
          bg-white border-4 border-red-500 text-red-500 transform 
          duration-500  hover:border-red-400 hover:text-white hover:bg-red-400">
          Suprise Me
        </button>
      </div>
    </div>
  );
}

export default ReviewItem;
