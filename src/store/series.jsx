import FilmContext from "./film-context"; 
import { useContext } from "react";
const Series = () =>
{
   const {item : FilmCxt} = useContext(FilmContext);
   return {
      series:[
      { title : null, data :  FilmCxt?.fetchNetflixOriginals},
      {title : "Xu hướng", data : FilmCxt?.fetchTrending},
      {title : "Xếp hạng cao", data : FilmCxt?.fetchTopRated},
      {title : "Hành động", data : FilmCxt?.fetchActionMovies},
      {title : "Hài", data : FilmCxt?.fetchComedyMovies},
      {title : "Kinh Dị", data : FilmCxt?.fetchHorrorMovies},
      {title : "Lãng Mạn", data : FilmCxt?.fetchRomanceMovies},
      {title : "Tài liệu", data : FilmCxt?.fetchDocumentaries}
      ]
   }
}
export default Series;