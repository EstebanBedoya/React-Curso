import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}



const forecastItemList = [
    { hour: 18, state: 'clear', temperature: 24, weekDay: 'lunes' },
    { hour: 10, state: 'clouds', temperature: 23, weekDay: 'lunes' },
    { hour: 8, state: 'rain', temperature: 17, weekDay: 'miercoles' },
    { hour: 1, state: 'drizzle', temperature: 17, weekDay: 'martes' },
    { hour: 15, state: 'clouds', temperature: 118, weekDay: 'jueves' },
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList} />