import React, { useEffect, useState } from 'react';
import AlbumData from '../../components/AlbumData';
import Busca from '../../components/Busca';
import Button from '../../components/Button';
import Service from '../../services/httpService';

import { Container} from './styles';

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
        {albums.map((album: any) => <AlbumData album = {album}/>)}
      <Button />

    </Container>
  );
} 

export default Album;