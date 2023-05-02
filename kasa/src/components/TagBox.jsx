import React from "react";
import style from "../styles/tag.module.css"
import Tag from "./Tag"

export default function TagBox({ Tags }) {
  return (
    <div className={style.containerTag}>
      {Tags.map((tags, index) => (
        <Tag  key={index} text={tags} />
      ))}
    </div>
  );
}
