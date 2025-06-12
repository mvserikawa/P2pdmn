import React , { useEffect, useState } from 'react'
import {IconField} from 'primereact/iconfield'
import {InputText} from 'primereact/inputtext'
import {InputIcon} from 'primereact/inputicon'
import axios from 'axios'

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('') 

    useEffect(() => {
        const fazerBusca = async () => {
            const { data } = await axios.get('https://openweathermap.org/forecast5#name5', {
                params: {
                    q: city,
                    appid: process.env.OPENWEATHER_KEY,
                    units: 'metric', 
                    lang: 'pt_br' 
                }
            })
            console.log(data)
        }
        fazerBusca()
    }, [termoDeBusca])

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
    </div>
  )
}

export default Busca