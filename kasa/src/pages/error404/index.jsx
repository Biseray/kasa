import React from "react";
import "../../index.css"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { TabTitle } from "../../utiles/TabTitle";

import style from "../../styles/error404.module.css";

export default function error404() {

  TabTitle('Kasa - erreur 404')
  return (
    
    <>
      <Navigation />
      <main>
        <div  className={style.tete}>
          <div className={style.pos_error}> 
            <div className={style.Txt404}>404</div>
            <div className={style.TxtError} > Oups! La page que vous demandez n'existe pas </div>
            <Link to="/" className={style.link}>Retourner sur la page d'accueil</Link>
          </div>
        </div>
      </main>
      <Footer />


    </>

  );
}


