import React from 'react'
import 'typeface-roboto'
import WeatherDetails from './WeatherDetails'

export default {
    title: 'WeatherDetails',
    component: WeatherDetails
}   

export const WeatherDetailsExample = () => <WeatherDetails humidity={12} wind={80} />