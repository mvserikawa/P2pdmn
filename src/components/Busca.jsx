import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import PrevisaoLista from './PrevisaoLista'

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('São Paulo')
    const [resultados, setResultados] = useState([])
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        if (termoDeBusca.length < 3) {
            setResultados([])
            return
        }

        if (timeoutId) clearTimeout(timeoutId)

        const novoTimeout = setTimeout(async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/forecast', {
                    params: { city: termoDeBusca }
                })
                setResultados([data])
            } catch (err) {
                console.error('Erro ao buscar previsão:', err)
                setResultados([])
            }
        }, 2000)

        setTimeoutId(novoTimeout)

        return () => clearTimeout(novoTimeout)
    }, [termoDeBusca])

    return (
        <div className='border-bottom border border-1 border-400 p-2 text-center font-bold'>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search'/>
                <InputText
                    className='border-bottom border border-1 border-400 font-bold'
                    placeholder='Buscar cidade...'
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                    value={termoDeBusca}
                />
            </IconField>
            {
                resultados.map((resultado, index) => (
                    <PrevisaoLista key={index} dados={resultado} />
                ))
            }
        </div>
    )
}

export default Busca
