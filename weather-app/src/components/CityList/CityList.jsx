import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const getCityCode = (city, country) => `${city}-${country}`

// renderCityAndCountry se va convertir en una funcion que retorna a otra funcion

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry
    // const { temperature, state } = weather

    return (
        <ListItem
            button
            key={getCityCode(city, countryCode)}
            onClick={eventOnClickCity}>
            <Grid container justify='center' alignItems='center'>

                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>

                <Grid item md={3} xs={12}>
                    <Weather temperature={weather && weather.temperature} 
                        state={weather && weather.state} />
                </Grid>

            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {

    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {



        const setWeather = async (city, countryCode) => {
            const apikey = 'edfefbe6f059c0a3ff542c5abc9acd41'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apikey}`


            try {
                const response = await axios.get(url)
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
                const state = data.weather[0].main.toLowerCase()

                const propName = getCityCode(city, countryCode) //Ej: [medellin-colombia]
                const propValue = { temperature, state } // Ej: {temperature: 10, state: 'sunny'}

                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            } catch (err) {
                if (err.response) {
                    // Errores que nos repsponde el server
                    const { data, status } = err.response
                    setError('Ha ocurrido un error en el servidor del clima')
                } else if (err.request) { // Errores que suceden por no llegar al server
                    setError('Verifique la conexion a internet')
                } else { // Errores imprevistos :v
                    setError('Ha ocurrido un error un imprevisto')
                }
            }

            
        }
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });

    }, [cities])

    const funcAux = renderCityAndCountry(onClickCity)

    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => funcAux(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>

    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
