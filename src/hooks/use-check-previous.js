import { useEffect, useRef } from "react";

const useCheckPrevious = (items) => {
   const prevId  = useRef(null);
   // save stored old
   useEffect(() => {
      prevId.current = items.id;
   }, [items.id]);
   return {
      prevId
   }
};

export default useCheckPrevious;
