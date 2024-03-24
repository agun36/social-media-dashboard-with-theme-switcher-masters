import React from "react";
import {  Container } from "react-bootstrap";
import "../card/style.scss"
import { OVERVIEW_DATA } from "../../assets/data/data";
import CardOverview from "./card2";
export default function Overview() {
    return (
      <div className="overview-wrapper ">
                <div>
                <h1 className="overview-title">Overview - Today</h1>
                </div>
        <Container className="overview">
                    {OVERVIEW_DATA.map((cardData, idx) => (                 
                                <CardOverview key={idx}  title={cardData.title} img={cardData.icon} followers={cardData.followers} todayfollowers={cardData.todayfollowers} iconUp={cardData.iconUp} iconDown={cardData.iconDown}/>
                    ))}
       
            </Container>
      </div>
    )
}