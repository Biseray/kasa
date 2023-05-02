
import React from "react";
import style from "../../styles/apropos.module.css"

import BannerBackground from "../../asset/photo-de-montagne.png";
import Banner from "../../components/Banner";
import BoxInfo from "../../components/BoxListApropos";
import { useLoaderData } from "react-router";
import kasaInfos from "../../datas/kasaInfo.js";
import { TabTitle } from "../../utiles/TabTitle";
export default function APropos() {

  TabTitle('Kasa - A Propos')
  const InfoApopros = useLoaderData();
  return  (
    
    <div className={style.apropos}>
      <div className={style.BoxBanner}>
        <Banner img={BannerBackground} title='' />
      </div>



      <div className={style.posBoxInfo}>
        <BoxInfo InfoApopros={InfoApopros} />

      </div>

    </div>
  );
}

export function kasaInfo() {
  return kasaInfos;
};
