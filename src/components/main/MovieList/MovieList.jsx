import React, { useMemo } from "react";

import { Tile, Row, RowInner, TileImg, Section } from "./styles";
import MovieDetail from "./MovieDetail";
import useHandleFeatureAndData from "../../../hooks/use-handle-feature-and-data";

const Movielist = ({ items, playvideo, currentVideo }) => {
   // get custom hook
   const { handleCompleteFeature, list, isTitle, itemsFeature, showFeature } =
      useHandleFeatureAndData(items);
   const listFeature = useMemo(() => itemsFeature, [itemsFeature]);

   return (
      <Section istitle={isTitle.toString()}>
         {isTitle && (
            <h2 style={{ color: "white", margin: "0" }}>{items.title}</h2>
         )}
         <Row>
            <RowInner istitle={isTitle.toString()}>
               {list?.map((value) => (
                  <Tile
                     key={value.id}
                     istitle={isTitle.toString()}
                     onClick={() => {
                        handleCompleteFeature(value);
                        if (currentVideo) {
                           currentVideo.pauseVideo();
                        }
                        
                     }}
                  >
                     <TileImg
                        src={!isTitle ? value.poster_path : value.backdrop_path}
                        istitle={isTitle.toString()}
                     ></TileImg>
                  </Tile>
               ))}
            </RowInner>
         </Row>
         {showFeature && (
            <MovieDetail itemsFeature={listFeature} playvideo={playvideo} />
         )}
      </Section>
   );
};
export default Movielist;
