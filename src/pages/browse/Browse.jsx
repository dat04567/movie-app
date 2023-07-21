import React from "react";
import FilmProvider from "../../store/FilmProvider";
import Header from '../../components/header/Header';
import Main from '../../components/main/Main'
import "./Browse.css";

function Browse() {
   return (
      <FilmProvider>
         <div className="app">
				<Header />
            <Main />
         </div>
      </FilmProvider>
   );
}

export default Browse;
