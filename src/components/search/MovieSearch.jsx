import React, { useMemo } from "react";
import { TileImg } from "../main/MovieList/styles";
import { RowInnerSearch, TileSearch } from "./styles";
import MovieDetail from "../main/MovieList/MovieDetail";
import Modal from "../UI/Modal"; // modal show details
import useHandleFeatureAndData from "../../hooks/use-handle-feature-and-data"; // hook custom use-handle-feature-and-data

//convert obj data 
const getObjData = function (data) {
   return { data: data };
};

export default function MovieSearch({ data }) {
   // using hook custom 
   const { handleCompleteFeature, list, itemsFeature, showFeature,setShowFeature } =
      useHandleFeatureAndData(useMemo(getObjData.bind(null, data), [data]));
   const listFeature = useMemo(() => itemsFeature, [itemsFeature]);
   return (
      <>
         <div style={{padding: "0 3rem"}}>
            <RowInnerSearch>
               {list?.map((value) => (
                  <TileSearch
                     key={value.id}
                     onClick={() => {
                        handleCompleteFeature(value);
                     }}
                  >
                     <TileImg
                        src={value.poster_path}
                     ></TileImg>
                  </TileSearch>
               ))}
            </RowInnerSearch>
         </div>
         {showFeature && (
            <Modal onClose={() => setShowFeature(false)} >
               <MovieDetail itemsFeature={listFeature} />
            </Modal>
         )}
      </>
   );
}
