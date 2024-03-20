import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../card/style.scss"
import { OVERVIEW_DATA } from "../../assets/data/data";
import CardOverview from "./card2";
import { useTheme } from "../../context/ThemeContext";
export default function Overview() {
    const { darkMode } = useTheme();
    const titleStyle = darkMode ? 'lights2' : 'blacks';
    
    console.log('titleStyle:', titleStyle);
    return (
      <div className="overview-wrapper ">
                <div>
                <h1 className={`overview-title ${titleStyle}`}>Overview - Today</h1>
                </div>
        <Container className="overview">
                    {OVERVIEW_DATA.map((cardData, idx) => (                 
                                <CardOverview key={idx}  title={cardData.title} img={cardData.icon} followers={cardData.followers} todayfollowers={cardData.todayfollowers} iconUp={cardData.iconUp} iconDown={cardData.iconDown}/>
                    ))}
       
            </Container>
      </div>
    )
}