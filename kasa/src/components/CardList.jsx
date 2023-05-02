import React from "react";
import style from "../styles/card.module.css"
import Card from './card';

export default function CardList({locations}) {
    return (
        
        <div className={style.ContainerCards}>
            {locations.map(({ id, title, cover }) => 
                
                      <Card
                        
                        key={id}
                        id={id}
                        cover={cover}
                        title={title}
                    />
                
            )}
         
    </div>
    )
    
}
