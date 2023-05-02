import React from "react";
import logoFooter from '../logoFooter.png'
import style from "../styles/footer.module.css";





export default function Footer() {
    return(
        <div>
            <footer className={style.footer}>
                <div className={style.posImg}>
                    <img src={logoFooter} className={style.ks_footerLogo} alt="kasa" />
                </div> 
                <p className={style.txtFooter}>Ⓒ 2020 Kasa. All Rights reserved </p>
            </footer>
        
        </div>
    )
}