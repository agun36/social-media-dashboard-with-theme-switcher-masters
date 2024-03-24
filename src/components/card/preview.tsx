import React from "react";
import "../card/style.scss";
import { PREVIEW_DATA } from "../../assets/data/data";

import CardPlace from "./card";

export default function Preview() {
  return (
    <div className="container preview">
      {PREVIEW_DATA.map((cardData, idx) => (
        <CardPlace
          key={idx}
          index={idx}
          name={cardData.name}
          title={cardData.title}
          img={cardData.icon}
          followers={cardData.followers}
          todayfollowers={cardData.todayfollowers}
          iconUp={cardData.iconUp}
          iconDown={cardData.iconDown}
        />
      ))}
    </div>
  );
}
