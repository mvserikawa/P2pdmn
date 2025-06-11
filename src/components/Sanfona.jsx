import React from 'react'
import './Sanfona.css'
import {Card} from 'primereact/card'
import { useState } from 'react'
import Cartao from './Cartao'

const Sanfona = ({itens}) => {

    const [indiceAtivo, setIndiceAtivo] = useState(null)
    const itemClicado = (indice => {
        setIndiceAtivo(indice)
    })


    const expressaoJSX = itens.map((item, indice) => (
        <Card key={indice} className='border-1 border-400'>
            <div onClick={() => itemClicado(indice)} className='flex align-items-center cursor-pointer border-1 border-400'>
                <i className='pi pi-angel down'></i>
                <h5 className='inline ml-3'>{item.titulo}</h5>
            </div>
        <p>
            {item.conteudo}
        </p>
        </Card>
    )) 
  return (
        <div>
            <p>{indiceAtivo}</p>
      {
        expressaoJSX
      }
    </div>
  )
}

export default Sanfona