import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state: 'clear', temperature: 24, weekDay: 'lunes' },
    { hour: 10, state: 'clouds', temperature: 23, weekDay: 'lunes' },
    { hour: 8, state: 'rain', temperature: 17, weekDay: 'miercoles' },
    { hour: 1, state: 'drizzle', temperature: 17, weekDay: 'martes' },
    { hour: 15, state: 'clouds', temperature: 118, weekDay: 'jueves' },
]

test('Forecast render', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItem = await findAllByTestId('forecast-item-container')

    expect(forecastItem).toHaveLength(5)
})
