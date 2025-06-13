import React , { useEffect, useState } from 'react'
import {IconField} from 'primereact/iconfield'
import {InputText} from 'primereact/inputtext'
import {InputIcon} from 'primereact/inputicon'
import axios from 'axios'
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
        {
            resultados && resultados.forecasts && (
            <PrevisaoLista dados={resultados.forecasts} />
            )   
        }
    </div>
  )
}

export default Busca