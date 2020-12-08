import React from 'react'
import CityList from './CityList'
import {action} from '@storybook/addon-actions'

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    { city: 'Medellin', country: 'Colombia' },
    { city: 'Bogota', country: 'Colombia' },
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Santiago', country: 'Chile' }
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action('Click en city')}/>