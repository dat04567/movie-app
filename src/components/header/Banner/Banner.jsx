import React from "react";
import * as SOURCE from "../../../constants/source"; // url base img
import classes from "./Banner.module.css";

export default function Banner(props) {
   const bg = `url(${SOURCE.BASE_IMG_URL}${props.path}) center/cover no-repeat`;
   return <div className={classes.banner} style={{background: bg}}> </div>;
}
