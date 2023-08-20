import React from 'react'
import AlbumsContainer from './AlbumList'

describe('<AlbumsContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AlbumsContainer />)
  })
})