import styled from "styled-components";


export const MovieDetailContainer = styled.div`
   color: white;
   display: flex;
   column-gap: 4rem;
   margin: 3rem 3rem 0 3rem;
   & div{
      width: 70%;
      margin-left:2rem;
   }
   & h1{
      font-size: 3rem;
      margin:0;
   }
   & p:last-child{
      margin-top: 1rem;
      font-weight: normal;
   }
   & p {
      margin:0;
      font-weight:bold;
      font-size:1.1rem;
   }


   & hr{
      margin: 1rem 0;
   }
   & img{
      height: 400px;
      width: 100%;
   }
   
`

// check ititle
export const Section = styled.section`
   margin: ${({ istitle }) => (istitle === "false" ? "" : "2rem 2rem 0 1rem;")}
   margin-bottom: ${({ istitle }) => (istitle === "false" ? "" : "4rem")}
`;



export const Row = styled.article`
   overflow-x: scroll;
   width: 100%;
   margin-left: 1rem;
   &::-webkit-scrollbar {
      background-color: black;
      height: 5px;
      transition: background-color 2s ease-in-out;
   }
   &::-webkit-scrollbar-thumb {
      border-radius: 12px;
   }
   &:hover {
      &::-webkit-scrollbar-thumb {
         background: #292929;
      }
   }
`;
export const Tile = styled.div`
   position: relative;
   display: inline-block;
   width: 250px;
   height: 140.625px;
   margin-right: 10px;
   font-size: 20px;
   cursor: pointer;
   transition: 450ms all;
   transform-origin: center left;

   &:hover ~ &
   {
      // translate3d(40px, 0, 0);
      transform: ${({ istitle }) =>
         istitle === "false"
            ? "translate3d(40px, 0, 0)"
            : "translate3d(30px, 0, 0)"}
   }
   ::-webkit-scrollbar {
      background-color:black;
`;

export const RowInner = styled.div`
   transition: 450ms transform;
   font-size: 0;
   white-space: nowrap;
   margin: ${({ istitle }) => (istitle === "false" ? "50px 0" : "10px 0")};
   padding-bottom: 10px;
   &:hover {
      transform: ${({ istitle }) =>
         istitle === "false"
            ? "translate3d(8.5px, 0, 0)"
            : "translate3d(0, 0, 0)"};
   }
   &:hover ${Tile} {
      opacity: 0.3;
   }
   &:hover ${Tile}:hover {
      transform: scale(1.1);
      opacity: 1;
   }
`;

export const TileImg = styled.img`
   width: 100%;
   height: ${({ istitle }) => (istitle === "false" ? "auto" : "100%")};
   -o-object-fit: cover;
   object-fit: cover;
`;


