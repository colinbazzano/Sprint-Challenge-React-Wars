import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';


export default function CharGrid() {

    const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      console.log('star wars characters', response.data.results)
      setChars(response.data.results);
    })
    .catch(error => {
      console.log('The data was not returned', error);
    });
  }, []);

  return (
      <div className="container">
          {chars.map(char => {
              return (
              <CharCard 
              key={char.index}
              name={char.name}
              birth_year={char.birth_year}
              height={char.height}
              skin_color={char.skin_color}
              />
              );
          })}
      </div>
  );
}