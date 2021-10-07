import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const AlbumData = (prop: any) => {

  return (
    <Container>
      <Link to={`/Tracks/${prop.album.album.tracklist.split('/')[4]}`}>
      <h1>nome do album: {prop.album.title}</h1>
      </Link>
    </Container>
    

  );
}

export default AlbumData;