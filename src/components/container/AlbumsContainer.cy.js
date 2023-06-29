import React from 'react'
import AlbumsContainer from './AlbumsContainer'

describe('<AlbumsContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AlbumsContainer />)
  })
})