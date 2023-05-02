import React from "react";

import TagBox from "../../components/TagBox";
import BoxInfo from "../../components/boxinfo";
import style from "../../styles/fichedetail.module.css"
import locationList from "../../datas/logements";
import Rating from "../../components/Rating";
import { useLoaderData } from "react-router";
import { TabTitle } from "../../utiles/TabTitle";
import Carousel from "../../components/Carousel";



export default function FicheDetail() {

    
const List = (equipements) => {
                return( <ul className={style.list}>
              {equipements.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>)
    
  
}

  const dataLocation = useLoaderData();



  TabTitle(`Kasa - ${dataLocation.title}`);
  return (
    <div className={style.FicheDetail}>


<Carousel allPictures={dataLocation.pictures} /> 
      

      <div className={style.posInfoLocation}>
        <div className={style.locationInfo}>
          <h1 className={style.NameLocation}> {dataLocation.title}   </h1>
          <h2 className={style.city}>  {dataLocation.location}   </h2>
          <div className={style.posTag}> <TagBox Tags={dataLocation.tags} />   </div>

        </div>
        <div className={style.posDirection}>
          <div className={style.posCartProfil}>
            <div className={style.profil}>
              <p className={style.name}> {dataLocation.host.name}</p>
              <img className={style.profilImg} src={dataLocation.host.picture} alt={dataLocation.host.name} />
            </div>
          </div>

          <div>
            <Rating RatingStar={dataLocation.rating} /></div>
        </div>
      </div>
      <div className={style.posBoxI}>
        <BoxInfo title={"Description"} description={dataLocation.description} />
        <BoxInfo title={"Équipements"} description={List(dataLocation.equipments)} />
      </div>
    </div>
  );

}

export function locationLoader({ params }) {

  return locationList.find(location => location.id === params.id);

};