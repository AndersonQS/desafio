import React, { useEffect, useState } from 'react';
import AlbumData from '../../components/AlbumData';
import Busca from '../../components/Busca';
import Button from '../../components/Button';
import Service from '../../services/httpService';

import { Container, Grade } from './styles';

const Album: React.FC = (props: any) => {
  const [albums, setAlbums] = useState<any>([])
  const populate = async (e: String) => {
      const response: any = await Service.searchAlbum(e)
      if (response) {
          setAlbums(response.data)        
      }
      
  }
  useEffect(() =>{
     populate(props.match.params.name)


  },[])
  return(
    <Container>
      <Busca changeText={populate}/>
    
      <h1>
        Nome do Album: 
        </h1> 
        <Grade>
        {albums.map((album: any) => <AlbumData album = {album}/>)}
       

       </Grade>


    </Container>
  );
} 

export default Album;