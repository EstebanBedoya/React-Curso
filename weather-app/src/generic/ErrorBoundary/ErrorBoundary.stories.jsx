import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: 'ErrorBoundary',
    component: ErrorBoundary 
}

export const ErrorBoundaryExample = () => <ErrorBoundary saludo='holis' activo={true} />