import React, { useState } from "react";
import SearchInput from "./Searchnput";
import {
   Form,
   FormContainer,
   Hr,
   BtnSearch,
   BtnReset,
   BtnContainer,
   Erro,
} from "./styles";
import useInput from "../../hooks/use-input";
import useFetchContent from "../../hooks/use-fetch-content";
import { BASE_URL, API_KEY } from "../../service/requests"; // get API key and base url 
import MovieSearch from "./MovieSearch";
// form seacrh
export default function FormSearch() {
   const { fetchData } = useFetchContent();
   const [data, setData] = useState([]);


   // check validation
   const {
      value: enteredSearch,
      isValid: enteredSearchIsValid,
      hasError: SearchInputHasError,
      valueChangeHandler: SearchChangedHandler,
      inputBlurHandler: SearchBlurHandler,
      reset: resetSearchInput,
   } = useInput((value) => value.trim() !== "");

   const fetchDataSearch = async function () {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${enteredSearch}&language=en-US`;
      const { results } = await fetchData(url);
      setData(results);
   };

   // get api fect search
   const submitHandler = (event) => {
      event.preventDefault();
      fetchDataSearch();
   };

   return (
      <>
         <FormContainer>
            <Form onSubmit={submitHandler}>
               <SearchInput
                  onBlur={SearchBlurHandler}
                  onChange={SearchChangedHandler}
                  value={enteredSearch}
               />
               <Hr />
               {SearchInputHasError && <Erro>Search must not be empty.</Erro>}
               <BtnContainer>
                  <BtnReset onClick={resetSearchInput}> RESET </BtnReset>
                  <BtnSearch type="submit" disabled={!enteredSearchIsValid}>
                     SEARCH
                  </BtnSearch>
               </BtnContainer>
            </Form>
          
         </FormContainer>
         <h2 style={{color: "white",fontSize:"1.8rem",marginBottom:"2ren"}}>Search Result</h2>
         {/* results */}
         {data &&   <MovieSearch data = {data} />}
      </>
   );
}
