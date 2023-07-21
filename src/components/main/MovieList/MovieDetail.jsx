import { API_KEY, MOVIE_URL } from "../../../service/requests";
import useFetchContent from "../../../hooks/use-fetch-content";
import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import { MovieDetailContainer } from "./styles";

const MovieDetail = ({ itemsFeature, playvideo }) => {
   const { fetchData } = useFetchContent();
   const [item, setItem] = useState({});
   // movie to id
   const movieUrl = `${MOVIE_URL}${itemsFeature.id}/videos?api_key=${API_KEY}`;
   useEffect(() => {
      const getData = async () => {
         try {
            let data = await fetchData(movieUrl);
            // set type = "Teaser" or "Trailer" options more than  is "Trailer"
            data = data.results?.filter(
               (value) =>
                  value.type.includes("Teaser") ||
                  value.type.includes("Trailer")
            );
            const firstTrailer = data?.find((value) =>
               value.type.includes("Trailer")
            );
            const firstTester = data?.find((value) =>
               value.type.includes("Teaser")
            );
            // check show url video or img url
            if (firstTester && firstTrailer) {
               setItem({
                  key: firstTrailer.key,
                  ...itemsFeature,
               });
            } else if (firstTester && !firstTrailer) {
               setItem({
                  key: firstTester.key,
                  ...itemsFeature,
               });
            } else {
               setItem({
                  ...itemsFeature,
               });
            }
         } catch (error) {
            console.log("erro");
         }
      };
      getData();
   }, [fetchData, movieUrl, itemsFeature]);
   const opts = {
      height: "400",
      width: "100%",
      playerVars: {
         autoplay: 1,
      },
   };
   // check key is null if null img
   const movie = item.key ? (
      <YouTube videoId={item.key} opts={opts}  onPlay={playvideo} />
   ) : (
      <img src={item.backdrop_path} alt="" />
   );
   return (
      <MovieDetailContainer>
         <div>
            <h1>{item.name}</h1>
            <hr />
            <p>Release date: {item.release_date}</p>
            <p>
               Vote: {item.vote_average}/{item.vote_count}
            </p>
            <p>{item.overview}</p>
         </div>
         {movie}
      </MovieDetailContainer>
   );
};

export default MovieDetail;
