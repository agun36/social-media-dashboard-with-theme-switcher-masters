import React from 'react';
import { Card, Row } from "react-bootstrap";
import "../card/style.scss";
import { useTheme } from '../../context/ThemeContext';
export interface Props {
    title: string
    img: string
    followers: number
    todayfollowers: number
    iconUp?: string
    iconDown?: string
}

const CardOverview = (props: Props) => {
    const { darkMode } = useTheme();

    const todayFollowersClass = props.iconUp ? 'green' : props.iconDown ? 'red' : '';
    const titleStyle = darkMode ? 'lights' : 'blacks';
    const followersStyle = darkMode ? 'lights' : 'blacks';
    const iconSrc = props.iconUp ? props.iconUp: props.iconDown ? props.iconDown : "";
    
    return (
        <div className="card-section" style={{ backgroundColor: darkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)",}}>
    
            <Card.Body>
                <span className="d-flex justify-content-between flex-row-reverse"><Card.Img variant="top" src={props.img} />
                    <Card.Title className={`card-title ${titleStyle} !important`}>{props.title}</Card.Title></span>
                <div className="card-footer1">
                    <Card.Text className={`card-text-1 ${followersStyle} !important`}>{props.followers}</Card.Text>

                    <Card.Text className={`${todayFollowersClass} !important`}>
                        <img  src={iconSrc} alt="icon" />{props.todayfollowers}
                    </Card.Text>

                </div>
            </Card.Body>
        </div>
    )
}
export default CardOverview
// export default function CardPlace2({ title, img, followers, todayfollowers, num }: CardPlace2Props) {


