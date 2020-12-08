import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: 'ForcastItem',
    component: ForecastItem
}

export const lunesSoleado = () => <ForecastItem weekDay='lunes' hour={10} state='clear' temperature={25}  />