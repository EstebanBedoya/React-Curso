import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityIfno from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForescastChart'
import AppFrame from '../components/AppFrame'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const CityPage = () => {
    const city = 'medellin'
    const country = 'colomba'
    const state = 'clouds'
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forecastItemList = [
        { hour: 18, state: 'clear', temperature: 24, weekDay: 'lunes' },
        { hour: 10, state: 'clouds', temperature: 23, weekDay: 'lunes' },
        { hour: 8, state: 'rain', temperature: 17, weekDay: 'miercoles' },
        { hour: 1, state: 'clear', temperature: 17, weekDay: 'martes' },
        { hour: 15, state: 'clouds', temperature: 118, weekDay: 'jueves' },
    ]

    return (
        <AppFrame>
            <Grid container
                justify='space-around'
                direction='column'>
                <Grid item container justify='center'
                    xs={12}
                    alignItems='flex-end'>
                    <CityIfno city={city} country={country} />
                </Grid>

                <Grid container item xs={12}
                    justify='center'>

                    <Weather state={state} temperature={temperature} />

                    <WeatherDetails humidity={humidity} wind={wind} />

                </Grid>

                <Grid item>
                    <ForecastChart data={data} />
                </Grid>

                <Grid item>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>

            </Grid>
        </AppFrame>

    )
}


export default CityPage
