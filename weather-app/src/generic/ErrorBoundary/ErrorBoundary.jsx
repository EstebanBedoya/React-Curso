import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
    static propTypes = {
        prop: PropTypes
    }

    estaActivo = () => {
        return this.props.activo ? 'Activo': 'No activo'
    }

    render() {
        return (
            <div>

                <h1>
                    ErrorBoundary {this.props.saludo}
                    {
                        this.estaActivo()
                    }
                </h1>
            </div>
        )
    }
}
