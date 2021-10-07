import axios from 'axios'

const request = axios.create({
    method: 'GET',
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '14b09e3ba9msh2f3f7232ddcc365p11f67djsn17881bbbbcb8'
    }
})






class Service {
    async getArtist(name: String) {
        try {
            const response = await request.get(`artist/${name}`)
            return response.data;
        } catch (e) {
            console.error(e)
        }

    }

    async searchAlbum(name: String){
        try {
            const response = await request.get('search', {params: {q:name}})
            return response.data;
        } catch (e) {
            console.error(e)
        }
    }
}

export default new Service();