
import React from "react";
import starVide from "../asset/Vectorstar.png"; 
import starColor from "../asset/VectorStarColor.png"; 
import style from "../styles/rating.module.css"; 

const Rating = ({ RatingStar }) => {
    // creation des tableaux d'étoiles vides et detoiles pleinne contenant 5 étoiles
    const fullStars = Array(5).fill(starColor); 
    const Empty = Array(5).fill(starVide); 
    
    return (
        <div className={style.posRating}> 
            { fullStars.slice(5 - RatingStar).map(( fullStar,index ) => ( //renvoie le nombre detoile correspondant 
                <div key={index} className={style.ratingStars}>
                    <img src={fullStar} alt="" /> 
                </div>
            ))}
            
            { Empty.slice(RatingStar).map((Empty ,index )=> { // renvoie le nombre d'étoiles pour remplire le tableau
                return (
                    <div key={index } className={style.ratingStars}>
                        <img src={ Empty} alt="" /> 
                    </div>
                )
            })}
        </div>
    )
};

export default Rating; 
