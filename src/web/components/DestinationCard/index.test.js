import React from 'react';
import { Provider } from 'react-redux'
import DestinationCard from './index'
import configureStore  from 'redux-mock-store'
import renderer from 'react-test-renderer'

const mockStore = configureStore([])

describe('<DestinationCard/>', () => {

    let store 
    let component

    beforeEach(() =>  {
        store  = mockStore({})
        component = renderer.create(
            <Provider store={store}>
                <DestinationCard />
            </Provider>
        )
    })

    it('Matches the snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })
})