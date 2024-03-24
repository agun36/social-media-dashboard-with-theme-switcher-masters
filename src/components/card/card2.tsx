import React from 'react';
import { Card } from "react-bootstrap";
import "../card/style.scss";
export interface Props {
    title: string
    img: string
    followers: number
    todayfollowers: number
    iconUp?: string
    iconDown?: string
}

const CardOverview = (props: Props) => {
    const todayFollowersClass = props.iconUp ? 'green' : props.iconDown ? 'red' : '';
    const iconSrc = props.iconUp ? props.iconUp: props.iconDown ? props.iconDown : "";
    
    return (
        <div 
        className="card-section" 
        >
    
            <Card.Body>
                <span className="d-flex justify-content-between flex-row-reverse"><Card.Img variant="top" src={props.img} />
                    <Card.Title className="card-title card-title-name">{props.title}</Card.Title></span>
                <div className="card-footer1">
                    <Card.Text className="card-text-1">{props.followers}</Card.Text>

                    <Card.Text className={`${todayFollowersClass} !important`}>
                        <img  src={iconSrc} alt="icon" />{props.todayfollowers}
                    </Card.Text>

                </div>
            </Card.Body>
        </div>
    )
}
export default CardOverview;