import React from 'react'
import { Card } from 'primereact/card'
import { Image } from 'primereact/image'

export default function PrevisaoLista(props) {
    const lista = props.dados.map((item, indice) => {
        return (
            <Card key={indice} className="mt-3">
                <div>
                    <strong>Data:</strong> {item.datetime}
                </div>
                <div>
                    <strong>Temperatura mínima:</strong> {item.temp_min}°C
                </div>
                <div>
                    <strong>Temperatura máxima:</strong> {item.temp_max}°C
                </div>
                <div>
                    <strong>Umidade:</strong> {item.humidity}%
                </div>
                <div>
                    <strong>Descrição:</strong> {item.description}
                </div>
                <div>
                    <Image
                        src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        alt="ícone"
                        width="50"
                    />
                </div>
            </Card>
        )
    })

    return <div className="grid">{lista}</div>
}
