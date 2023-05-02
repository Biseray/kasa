import React from "react";

import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import BannerBackground from "../../asset/photo-de-failse.png";
import { useLoaderData } from "react-router";
import locationList from '../../datas/logements.js';
import style  from "../../styles/home.module.css"

import { TabTitle } from "../../utiles/TabTitle";

export default function Home() {
  TabTitle('Kasa - Accueil')
  const locations = useLoaderData();

 
  return (
    <div className={style.Home}>
   
    
    < div className={ style.BoxBanner } >
        
       <Banner img={BannerBackground} title='Chez vous, partout et ailleurs' /> 
      </div>
        <CardList locations={locations} />
     
        
    </div>
  );
}


export function locationsLoader() {
  return locationList;
};