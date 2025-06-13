import React , { useEffect, useState } from 'react'
import {IconField} from 'primereact/iconfield'
import {InputText} from 'primereact/inputtext'
import {InputIcon} from 'primereact/inputicon'
import axios from 'axios'
import striptags from 'striptags'
import Sanfona from './Sanfona'
import PrevisaoLista from './PrevisaoLista'

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('São Paulo') 
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const fazerBusca = async () => {
            const { data } = await axios.get('http://localhost:3000/forecast', {
              params: { 
                city: termoDeBusca 
                }     
            })
            setResultados(data)
        }
        if (termoDeBusca && resultados.length >= 3) {
            fazerBusca()
        } else {
            const timeoutID = setTimeout(() => {
                if (termoDeBusca)
                    fazerBusca()
            }, 2000)
            return () => {
                clearTimeout(timeoutID)
            }
        }
    }, [resultados.length, termoDeBusca])

  return (
    <div>
        <IconField iconPosition='left'>
            <InputIcon className='pi pi-search' />
            <InputText 
            placeholder="Buscar..."
            onChange={ (e) => {setTermoDeBusca(e.target.value)}}
            value={termoDeBusca}
            />
        </IconField>
        {}
        {resultados?.forecasts?.map((item, index) => (
  <div 
    key={index}
    className="my-2 border border-1 border-400">
    
    <div className="border-bottom border-1 border-400 p-2 text-center font-bold">
      {resultados.city}, {resultados.country}
    </div>

    <div className="p-2">
      <p><strong>Data:</strong> {item.datetime}</p>
      <p><strong>Temp. Mínima:</strong> {item.temp_min}°C</p>
      <p><strong>Temp. Máxima:</strong> {item.temp_max}°C</p>
      <p><strong>Umidade:</strong> {item.humidity}%</p>
      <p><strong>Descrição:</strong> {item.description}</p>
      <img 
        src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} 
        alt={item.description} 
      />
    </div>
  </div>
))}

    </div>
  )
}

export default Busca