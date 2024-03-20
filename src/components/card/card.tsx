import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../card/style.scss"
import { useContext } from "react";
import { useTheme } from "../../context/ThemeContext";

export interface Props {
    name: string
    title: string
    img: string
    followers: number
    todayfollowers: number
    iconUp?: string
    iconDown?: string
    index: number
}
const CardPlace = (props: Props) => {
    const { darkMode } = useTheme();

    const todayFollowersClass = props.iconUp ? 'green' : props.iconDown ? 'red' : '';
    console.log('todayFollowersClass:', todayFollowersClass);
    const titleStyle = darkMode ? 'lights' : 'blacks';
    const followersStyle = darkMode ? 'lights' : 'blacks';
    const iconSrc = props.iconUp ? props.iconUp : props.iconDown ? props.iconDown : "";

    let borderStyle = "";
    let borderImageStyle = '';
    switch (props.index) {
        case 0:
        case 1:
            // Apply the same border to the first and second cards
            borderStyle = `2px solid ${darkMode ? "hsl(208, 92%, 53%)" : "hsl(208, 92%, 53%)"}`;
            break;
        case 2:
            // Apply linear gradient border to the third card
            
        borderStyle = `2px solid transparent`;
        borderImageStyle = `linear-gradient(90deg, hsl(37, 97%, 70%)5%, hsl(329, 70%, 58%)100%) 1`;
        
            break;
        default:
            // Apply a different color border to other cards
            borderStyle = `2px solid ${darkMode ? "hsl(348, 97%, 39%)" : "hsl(348, 97%, 39%)"}`;
            break;
    }
    return (
    <div className="card-section1"  style={{ backgroundColor: darkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)", borderTop: borderStyle, borderImage: borderImageStyle }}>

            <Card.Body className=" text-center" >
                <span className="d-flex justify-content-center align-items-center"><Card.Img variant="top" src={props.img} />
                    <Card.Title className={`card-title-name ${titleStyle} !important`}>{props.name}</Card.Title></span>
                <div className=" card-footer1">
                    <Card.Text className={`card-text-1 ${followersStyle}`}>{props.followers}</Card.Text>
                    <Card.Text className='card-text-2'>{props.title}</Card.Text>

                    <Card.Text className={todayFollowersClass}>
                        <img src={iconSrc} alt="icon" />{props.todayfollowers}
                    </Card.Text>

                </div>
            </Card.Body>
        </div>
    )
}
export default CardPlace