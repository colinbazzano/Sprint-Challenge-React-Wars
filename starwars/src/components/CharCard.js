import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 1% auto;
    border: 1px solid black;
    background-color: rgba(0,0,0, 0.5);
    color: rgb(255, 232, 31);
    width: 30%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.1);
        background-color: rgb(0,0,0);
    }
`;

const Name = styled.h2`
    font-weight: bold;
    font-size: 2rem;
`;

const CharCard = props => {
    return (
        <Card key={props.index}>
            <Name>{props.name}</Name>
            <p>Birth Year: {props.birth_year}</p>
            <p>Height: {props.height}</p>
            <p>Skin Color: {props.skin_color}</p>
        </Card>
    );
};

export default CharCard;