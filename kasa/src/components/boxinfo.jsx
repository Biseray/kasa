import React from "react";

import style from "../styles/BoxInfo.module.css";
import arrowTop from "../../src/asset/top.png"
import arrowBottom from "../../src/asset/bottom.png"
import { useState } from "react";

export default function BoxInfo({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.box}>
      <div className={style.titleBoxInfo}>
        <h3 className={style.title}>{title}</h3>
       <img className={style.btn} src={isOpen ? arrowTop :arrowBottom }  alt="" onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className={style.descriptionBoxInfo}>
         <div className={style.description}>{description}</div> 
        </div>
      )}
    </div>
  );
}



