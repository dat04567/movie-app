import {useEffect,useState} from "react";
import useCheckPrevious from './use-check-previous';
import * as SOURCE from "../constants/source";

export default function useHandleFeatureAndData(items) {

   const [list, setList] = useState([]);
   const [isTitle, setIsTitle] = useState(true);
   const [itemsFeature, setItemsFeature] = useState({})
   const [showFeature , setShowFeature] = useState(false);
   const {prevId} = useCheckPrevious(itemsFeature);

   // save data
   useEffect(() => {
      const listUrl = items.data?.map((value) => {
         let obj = {
            id: value.id,
            backdrop_path: `${SOURCE.BASE_IMG_URL}${value.backdrop_path}`,
            overview: value.overview,
            name: value.name || value.original_name || value.title,
            vote_count: value.vote_count,
            vote_average: value.vote_average,
            release_date: value.release_date || value.first_air_date,
            poster_path: `${SOURCE.BASE_IMG_URL}${value.poster_path}`,
         };
         // if title Originals is poster then take backdrop_path and title not emty
         if ( !items.title) {
            setIsTitle(false);
         }
         return obj;
      });
      // is listUrl is not empty
      if (listUrl) {
         setList(listUrl);
      }
   }, [items, isTitle]);

   // set ItemFeature and show Features
   const handleCompleteFeature = (items) => {
      if (prevId.current === items.id || !prevId.current) {
         if (showFeature) {
            setShowFeature(false);
         } else {
            setShowFeature(true);
         }
      } else {
         setShowFeature(true);
      }
      setItemsFeature(items);
   };


   return {
      handleCompleteFeature,
      list,
      isTitle,
      itemsFeature,
      showFeature,
      setShowFeature
   }
}
