import React from 'react'
import Weather from './Weather'

export default {
    title: 'Weather',
    component: Weather
}

export const sunnyExample = () => <Weather temperature={25} state='clear'/>
export const cloundyExample = () => <Weather temperature={16} state='clouds'/>