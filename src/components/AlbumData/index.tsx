import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Grades, LinkButton } from './styles';

const AlbumData = (prop: any) => {

  return (
    <Container>
      <Grades>

      <LinkButton href={`/Tracks/${prop.album.album.tracklist.split('/')[4]}`}>
      <li>
        
         {prop.album.title}
         
         </li>
      </LinkButton>
      </Grades>
    </Container>
    

  );
}

export default AlbumData;