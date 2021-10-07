import axios from "axios";

const request = axios.create ({
  method: 'GET',
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': '14b09e3ba9msh2f3f7232ddcc365p11f67djsn17881bbbbcb8'
  }
});

class Service {
    async getAlbum (){
        try {
            const response = await request.get('album/302127')
            console.log(response)
            
        } catch (e) {
            console.log(e)
        }
    }
}   
export default new Service();