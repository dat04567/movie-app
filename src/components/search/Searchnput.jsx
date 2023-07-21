import React from "react";
import { Input, InputContainer } from "./styles";
import SearchIcon from "../UI/Icon";

// components search input
export default function SearchInput({onBlur, onChange,value}) {
   return (
         <InputContainer>
            <Input
               type="text"
               onBlur={onBlur}
               onChange={onChange}
               value={value}
            />
            <SearchIcon />
         </InputContainer>
   );
}
