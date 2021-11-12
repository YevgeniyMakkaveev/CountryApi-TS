import { title } from "process";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
border-radius: 0.5rem;
background-color: var(--bg-color);
box-shadow: var( --shadow);
cursor: pointer;
overflow: hidden;
`;
const CardImg = styled.img`
display: block;
width: 100%;
height: 150px;
object-fit: cover;
object-position: center;
box-shadow: var( --shadow);
`;
const CardBody = styled.div`
padding: 1rem 1.5rem 1.4rem;
`;
const CardTitle = styled.h3`
margin: 0;
font-size: var(--fs-m);
font-weight: var(--fw-fat);
`;
const CardList = styled.ul`
list-style: none;
margin: 0;
padding: 1rem 0 0;

`;
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

interface ICard {
  img: string;
  name: string;
  info: IInfo[];
  onClick: () => void
}
interface IInfo {
  title: string;
  description: string;
}

const Card: React.FC<ICard> = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImg src={img} alt={name} />
      <CardBody>
        <CardTitle >{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
export default Card;
