import React from 'react'
import Sanfona from './components/sanfona'

const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem compilada e interpretada'
  },
  {
    titulo: 'Python',
    conteudo: 'Linguagem interpretada e dinamicamente tipada'
  },
  {
    titulo: 'Javascript',
    conteudo: 'Interpretada. Executa do lado do cliente e do lado do servidor'
  }
]

const App = () => {
  return (
    <Sanfona id="sanfona" itens={itens} />
  )
}

export default App