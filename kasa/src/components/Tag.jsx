import React from "react";

import style from "../styles/tag.module.css"

export default function Tag({ text, index }) {

    return (
        <div className={style.NameTag} key={index}>
            <p className={style.tag} >
                {text}
            </p>
        </div>
    )
}
