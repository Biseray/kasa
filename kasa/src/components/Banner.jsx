import React from "react";

import style from "../styles/Banner.module.css";




export default function Banner({img,title}) {
    return (
        <div className={style.ks_banner}>
            
               
                <div className={style.img}>
                     <img className={style.img} src={img} alt="" />
                </div>
            <div className={style.overlay}>  
                <h1 className={style.title}> {title}</h1>  
            </div>   
        </div>
    )
}




