import styled from "styled-components";

export const TileSearch = styled.div`
   position: relative;
   cursor: pointer;
   transition: 450ms all;
   transform-origin: center left;
   margin-right: 10px;
   &:hover ~ &
   {
      transform:translate3d(21px, 20px, 0);
   }
`;

export const RowInnerSearch = styled.div`
   transition: 450ms transform;
   display: grid;
   grid-template-columns: repeat(9,1fr);
   row-gap:0.5rem;
   &:hover {
      transform: translate3d(0, 0, 0)
   }
   &:hover ${TileSearch} {
      opacity: 0.3;
   }
   &:hover ${TileSearch}:hover {
      transform: scale(1.1);
      opacity: 1;
   }
 
`;

export const InputContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 1rem;
`;
export const BtnReset = styled.button`
   padding: 0.7rem 2.5rem;
   border: 0;
   background: transparent;
   font-weight: bold;
   font-size: 1.1rem;
   color: #7d8186;
   cursor: pointer;
   &:hover{
      color: black;
   }
`;

export const BtnSearch = styled.button`
   padding: 0.7rem 2.5rem;
   background-color: #00bbec;
   border: 0;
   color: white;
   font-size: 1.1rem;
   font-weight: bold;
   cursor: pointer;
   transition: background-color 0.5s ease-in-out;
   &:disabled {
      background-color: #9cdaea;
      cursor: default;
   }
   &:hover
   {
      background-color: #9cdaea;
   }

`;
export const Hr = styled.hr`
   margin-top: 1rem;
   border: 0;
   border-bottom: 2px solid #0cb6e5;
`;
export const Input = styled.input`
   border: 0;
   padding: 0;
   margin-left: 3rem;
   font-size: 1.5rem;
   height: 100%;
   outline: none;
   width: 100%;
`;
export const BtnContainer = styled.div`
   position: absolute;
   bottom: 3rem;
   right: 3rem;
`;
export const FormContainer = styled.div`
   height: 300px;
   padding-top: 6rem;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Form = styled.form`
   height: 200px;
   background-color: white;
   width: 50%;
   border-radius: 8px;
   position: relative;
`;

export const Erro = styled.div`
   color: red;
   margin-left: 3rem;
`;
