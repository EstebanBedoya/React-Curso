import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test('CityInfo render ', async () => {

    //Arrage
    //Act
    const city = 'Medellin'
    const country = 'Colombia'

    //Render: renderiza el componente y retorna una serie de funciones de utilidad 
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    //Assert
    // "heading" => H1, H2, H3 ... ETC
    const cityAndCoutryComponents = await findAllByRole('heading')

    // ¿Cuando es correcto?
    // Cuando el primer (heading) se encuentra la ciudad "Medellin"
    // y cuando el segundo (heading) se encuentre en el pais "Colombia"

    expect(cityAndCoutryComponents[0]).toHaveTextContent(city)
    expect(cityAndCoutryComponents[1]).toHaveTextContent(country)

    // Si las 2 condiciones se cumplen (expect), el test esta OK
})
