import React from "react";
import { Container } from "react-bootstrap";
import "../card/style.scss"
import {PREVIEW_DATA } from "../../assets/data/data";

import CardPlace from "./card";
import { useContext } from "react";
import { useTheme } from "../../context/ThemeContext";
export default function Preview() {
    
    return (
        <div >
            <Container className="preview">
                
                    {PREVIEW_DATA.map((cardData, idx) => (
                       
                            
                                <CardPlace key={idx} index={idx} name={cardData.name} title={cardData.title} img={cardData.icon} followers={cardData.followers} todayfollowers={cardData.todayfollowers} iconUp={cardData.iconUp} iconDown={cardData.iconDown}/>
                            
                        
                    ))}
       
            </Container>
        </div>
    )
}