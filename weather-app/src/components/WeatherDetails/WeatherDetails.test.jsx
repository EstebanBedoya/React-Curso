import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test('WeatherDetail render ', async () => {
    

    const { findByText } = render(<WeatherDetails wind={12} humidity={80}/>)

    // Al usar las barras se pasa una expresion regular
    const wind = await findByText(/12/)

    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent('Viento: 12km/h')
    expect(humidity).toHaveTextContent('Humedad: 80%')
    
})
