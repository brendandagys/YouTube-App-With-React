import axios from 'axios'

const KEY = 'AIzaSyBpyV7NXDsgP3oJ4uhNme3ri37CHvd1bsY'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
