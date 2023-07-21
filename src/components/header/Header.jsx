import React,{useState,useEffect,useContext} from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import FilmContext from "../../store/film-context"; // data fetch
import InfoHeader from './InfoHeader'
import classes from './Header.module.css'
// random data 
const ranDomData = function (data) {
   // filter data not null or undefined
   data = data.filter( (item) => (item.backdrop_path && item.overview && item.name) );
   const index = Math.floor(Math.random() * data.length );
   return data[index];
};
export default function Header() {
   const { isLoading, item } = useContext(FilmContext);
   const [ranDomFlim,setRanDomFlim] = useState([])
   // path img url
   useEffect(() => {
      // if did load then set 
      if(!isLoading)
      {
         setRanDomFlim(previositem => ranDomData(item.fetchNetflixOriginals));
      }
   },[isLoading,item])
  
   return (
      <div className={classes.header}>
         <NavBar  />
         <InfoHeader name = {ranDomFlim.name} overview = {ranDomFlim.overview}/>
         <Banner path = {ranDomFlim?.backdrop_path} />
      </div>
   );
}
