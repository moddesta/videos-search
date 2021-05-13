import axios from 'axios';


const KEY ='AIzaSyCf0DcYTP6Dp0xDUH_VKNKcjcBufllPe_w';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
       // q: 'surfoards'
     }
});