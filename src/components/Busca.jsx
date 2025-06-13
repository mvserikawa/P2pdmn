import React , { useEffect, useState } from 'react'
import {IconField} from 'primereact/iconfield'
import {InputText} from 'primereact/inputtext'
import {InputIcon} from 'primereact/inputicon'
import axios from 'axios'
import striptags from 'striptags'

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('São Paulo') 
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const fazerBusca = async () => {
            const { data } = await axios.get('http://localhost:3000/search', {
              params: { 
                city: termoDeBusca 
                }     
            })
            setResultados(data)
        }
        if(termoDeBusca)
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
        {}
        {
            resultados.map((resultado, index) => (
            <Sanfona key={index} dados={resultado} />
            ))
        }

    </div>
  )
}

export default Busca