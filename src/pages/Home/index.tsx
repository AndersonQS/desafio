import React, { useState } from 'react';
import { Container, Main, LadoEsquerdo } from './styles';
import HomeData from '../../components/HomeData';
import Busca from '../../components/Busca';
import Service from '../../services/httpService'

const Home = () => {
    const [artist, setArtist] = useState<any>({})
    const getArtist = async (e: String) => {
        const response: any = await Service.getArtist(e)
        if (response) {
            setArtist(response)            
        }
    }
    return (
        
            <Container>
                <Busca changeText={getArtist}></Busca>
                <Main>
                    <LadoEsquerdo>
                        <HomeData artist={artist} />
                    </LadoEsquerdo>
                    
                   
                </Main>

            </Container>
       
    )
}

export default Home;