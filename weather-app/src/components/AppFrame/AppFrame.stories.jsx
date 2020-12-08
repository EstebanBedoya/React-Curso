import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam libero optio voluptates.
            Maiores, quasi vero?
        </AppFrame>
    </Router>
)