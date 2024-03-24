import React from "react";
import Card from "react-bootstrap/Card";
import "../card/style.scss";

export interface Props {
  name: string;
  title: string;
  img: string;
  followers: number;
  todayfollowers: number;
  iconUp?: string;
  iconDown?: string;
  index: number;
}
const CardPlace = (props: Props) => {
  const todayFollowersClass = props.iconUp
    ? "green"
    : props.iconDown
    ? "red"
    : "";
  const iconSrc = props.iconUp
    ? props.iconUp
    : props.iconDown
    ? props.iconDown
    : "";
    
  return (
    <div
      className="card-section1"
    >
      <Card.Body className=" text-center">
        <span className="d-flex justify-content-center align-items-center">
          <Card.Img variant="top" src={props.img} />
          <Card.Title className="card-title-name">
            {props.name}
          </Card.Title>
        </span>
        <div className=" card-footer1">
          <Card.Text className="card-text-1">
            {props.followers}
          </Card.Text>
          <Card.Text className="card-text-2">{props.title}</Card.Text>

          <Card.Text className={todayFollowersClass}>
            <img src={iconSrc} alt="icon" />
            {props.todayfollowers}
          </Card.Text>
        </div>
      </Card.Body>
    </div>
  );
};
export default CardPlace;
