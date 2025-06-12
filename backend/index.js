require('dotenv').config()
const axios = require('axios')
const cors = require('cors') 
const express = require('express')
const app = express()

//função que fica no meio do caminho
app.use(cors())
const weatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})



app.get('/forecast', async (req, res) => {
  try {
    const city = req.query.city
    if (!city) {
      return res.status(400).json({ error: 'City name is required' })
    }

    const response = await weatherClient.get('forecast', {
      params: {
        q: 'city',
        appid: 'process.env.OPENWEATHER_KEY',
        units: 'metric', 
        lang: 'pt_br' 
      }
    })

     const forecasts = response.data.list.map(item => ({
      datetime: item.dt_txt, 
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      humidity: item.main.humidity,
      icon: item.weather[0].icon,
      description: item.weather[0].description
    }))

    res.json({
      city: response.data.city.name,
      country: response.data.city.country,
      forecasts
    })
  } catch (error) {
    console.error(error.response?.data || error.message)
    res.status(500).json({ error: 'Erro ao obter previsão do tempo' })
  }
})

const port = 3000
app.listen(port, () => console.log (`Back End OK! Porta ${port}.`))