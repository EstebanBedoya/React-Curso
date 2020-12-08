import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from '../ForecastItem'
import { validValues } from '../IconState'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast

    return (
        <Grid
            data-testid='forecast-item-container'
            item key={`${weekDay}${hour}`}>
            <ForecastItem hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}
            ></ForecastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify='space-around'
            alignItems='center'>

            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )
}

//forcastItemList es un array de elemntos
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({

        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
        weekDay: PropTypes.string.isRequired,
    })).isRequired
}

export default Forecast
