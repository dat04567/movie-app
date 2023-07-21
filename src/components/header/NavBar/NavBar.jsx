import React,{useState,useEffect} from "react";
import NavBarIcon from "../../UI/Icon";
import styled from "styled-components";
import classes from "./NavBar.module.css"
const Div = styled.div`
   position: fixed;
   z-index: 100;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   padding-top: 1rem;

`;
export default function NavBar() {
   const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
      // setting funtion scroll 
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);
    const changeSearchPath = function()
    {
      window.location.href = './search'
    }
    const changeBrowserhPath = function()
    {
      window.location.href = './'
    }
   return (
      <Div className={scrolled ? `${classes.navbar} ${classes.scrolled}` : classes.navbar }>
         <h2
            style={{
               color: "red",
               padding: "0",
               margin: "0",
               paddingLeft: "1rem",
               cursor: "pointer",
            }}
            onClick = {changeBrowserhPath}
         >
           
            Movie App
         </h2>
         
         <NavBarIcon  onClick = {changeSearchPath}/>
      </Div>
   );
}
