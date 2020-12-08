import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({wind, humidity}) => {
    return (
        <>
            <Typography>Viento: {wind}km/h </Typography>
            <Typography>Humedad: {humidity}% </Typography>
        </>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,

}

export default WeatherDetails
