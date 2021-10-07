import React, { } from 'react';
import { Link } from 'react-router-dom';

import { Container, Picture,Infos } from './styles';

const HomeData = (prop: {artist:any}) => {
  

  return (
    <Container>

      <Infos>


      <Picture src={prop.artist.picture} alt={prop.artist.picture}/>
      <div>
        <h1>{prop.artist.name}</h1>

        <Link to = {`/Album/${prop.artist.name}`}><h3>Albums:{prop.artist.nb_album}</h3></Link>
        <h3>Numero de fans:{prop.artist.nb_fan}</h3>
      </div>
      </Infos>



    </Container>


  );
};

export default HomeData;