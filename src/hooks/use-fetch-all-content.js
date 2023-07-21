import { useState, useEffect } from "react";
import requests from "../service/requests";
import useFetchContent from "./use-fetch-content";


const useFetchAllConent = () => {
   // using useFecth to get data
   const [item, setItem] = useState({});
   const { fetchData: fetchFilmData } = useFetchContent();
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const getData = async () => {
         // take all key to object
         const fetchPromises = Object.keys(requests).map(async (key) => {
            const data = await fetchFilmData(requests[key]);
            return { [key]: data.results };
         });
         // run all promies to get all data
         const results = await Promise.all(fetchPromises);
         // merge data to object after set in item
         const mergedData = Object.assign({}, ...results);
         setItem(mergedData);
         setIsLoading(false);
         
      };
      getData();
   }, [fetchFilmData]);

      return {
         isLoading,
         item
      };
  
};
export default useFetchAllConent;
