import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'
import '@testing-library/jest-dom/extend-expect'

const cities = [

    { city: 'Medellin', country: 'Colombia', countryCode: 'CO' },
    { city: 'Bogota', country: 'Colombia', countryCode: 'CO' },
    { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR' },
    { city: 'Santiago', country: 'Chile', countryCode: 'CL' }

]

test('CityList render', async () => {


    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => { }} />)

    const items = await findAllByRole('button')

    expect(items).toHaveLength(4)
})


test('cityList click on item', async () => {
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole('button')

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})