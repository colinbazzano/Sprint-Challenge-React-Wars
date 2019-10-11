import React from 'react';

const CharCard = props => {
    return (
        <div className='charCard' key={props.index}>
            <h2>{props.name}</h2>
            <p>{props.birth_year}</p>
            <p>{props.height}</p>
            <p>{props.skin_color}</p>
        </div>
    );
};

export default CharCard;