import React from 'react'
import { Card } from 'primereact/card'
import { Image } from 'primereact/image'

export default function PrevisaoLista(props) {
    const lista = props.dados.map((item, indice) => {
        return (
        <div key={indice} className="col-12 md:col-6 lg:col-3 p-2">
            <Card className="shadow-3 border-round-xl p-3">
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
                <div className="flex flex-column align-items-center gap-3">
                    <Image
                        src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        alt="ícone"
                        width="50"
                    />
                </div>
            </Card>
        </div>
        )
    })

   return (
        <div className="container mx-auto lg:px-8">
            <div className="grid">{lista}</div>
        </div>
    )
}