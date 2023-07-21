import { useCallback} from "react";

const useFetchContent = () => {
   // send request take data 
   const fetchData = useCallback(async (url) => {
      try {
         const response = await fetch(url);
         const data = await response.json();
         return data;
      } catch (error) {
         console.error("Error fetching content:", error);
      }
   },[]);
   return {
      fetchData
   };
};

export default useFetchContent;
