import React from "react";

import { Link } from "react-router-dom";
import style from "../styles/card.module.css"


export default function Card({ id, title, cover}) {
  return (
   <Link className={style.CardLink} to={`fichedetail/${id}`} >
    <div className={style.Card} >
     
        <div className={style.cardOverlay}></div> 
      <img className={style.imgCard} src={cover} alt={title} />
      <h2 className={style.CardTitle} >
        {title} 
      </h2>
    
      </div>
   </Link> 
  );
}

