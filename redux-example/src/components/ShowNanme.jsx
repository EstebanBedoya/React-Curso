import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ShowNanme = ({ username }) => {
    const [name, setName] = useState("")
    fetch(`/api/getName/${username}`)
        .then(resp => {
            return resp.json()
        })
        .then(myJson => {
            setName(myJson)
        })
    return (
        <p>{name}</p>
    )
}

ShowNanme.propTypes = {

}

export default ShowNanme
