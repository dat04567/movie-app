import React, { useState, useCallback } from "react";
import Series from "../../store/series";
import Movielist from "./MovieList/MovieList";
import classes from "./Main.module.css";



export default function Main() {
   const { series } = Series();
   const [currentVideo, setCurrentVideo] = useState(null);

   // hand pasue video 
   const handlePlay = useCallback((event) => {
      // if two video is playing then old previous pause video
      try {
        if (currentVideo && event.target !== currentVideo) {
          currentVideo.pauseVideo();
        }
        setCurrentVideo(event.target);
      } catch (error) {
        console.error(error.message);
      }
    }, [currentVideo]);

   return (
         <main className={classes.main}>
            {series?.map((value, index) => (
               <Movielist
                  items={value}
                  key={value.title}
                  playvideo={handlePlay}
                  currentVideo={currentVideo}        
               />
            ))}
         </main>
   );
}
