import React from 'react';

const CharCard = props => {
    return (
        <div className='charCard' key={props.index}>
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Height: {props.height}</p>
            <p>Skin Color: {props.skin_color}</p>
        </div>
    );
};

export default CharCard;