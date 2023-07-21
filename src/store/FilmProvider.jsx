import React from "react";
import FlimContext from "./film-context";
import useFetchAllConent from "../hooks/use-fetch-all-content";


const FilmProvider = (props) => {
   const item = useFetchAllConent();
   return (
      <FlimContext.Provider value={item}>{props.children}</FlimContext.Provider>
   );
};

export default FilmProvider;
