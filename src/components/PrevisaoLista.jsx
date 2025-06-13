const PrevisaoLista = ({ dados }) => {
    return (
        <div className='mt-3'>
            <h3>
                {dados.city}, {dados.country}
            </h3>
            {dados.forecasts.slice(0, 5).map((item, index) => (
                <div key={index} className='my-2 border p-2 rounded'>
                    <div>{item.datetime}</div>
                    <div>🌡 Mín: {item.temp_min}°C | Máx: {item.temp_max}°C</div>
                    <div>💧 Umidade: {item.humidity}%</div>
                    <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt={item.description}
                            className='inline w-8 h-8'
                        />{' '}
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PrevisaoLista
