import axios from 'axios'
import env from 'react-dotenv'
import 'dotenv/config'


export default axios.create({
    baseURL: 'http://localhost:3000/forecast',
    headers: {
        Authorization: env.OPENWEATHER_KEY
    }
})