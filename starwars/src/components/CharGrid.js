import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';
import styled from 'styled-components';

const Grid = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;


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
      <Grid>
          {chars.map((char, index) => {
              return (
              <CharCard 
              key={index}
              name={char.name}
              birth_year={char.birth_year}
              height={char.height}
              skin_color={char.skin_color}
              />
              );
          })}
      </Grid>
  );
}