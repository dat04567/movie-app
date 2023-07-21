import React from "react"
import styled from 'styled-components'
import classes from './InfoHeader.module.css'
const Div = styled.div`
   position: absolute;
   color: white;
   width: 500px;
   top: 50%;
   transform: translateY(-50%);
   left: 3rem;
 
`
export default function InfoNavBar(props)
{
   return (
   <Div>
      <h1 className={classes.h1}>{props.name}</h1>
      <button className={classes.btn} >Play</button>
      <button className={classes.btn} style={{marginLeft:"1rem"}}>My List</button>
      <p className={classes.p}>{props.overview}</p>
   </Div>
   )
}