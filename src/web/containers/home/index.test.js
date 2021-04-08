import React from 'react';
import { Provider } from 'react-redux'
import Home from './index'
import configureStore  from 'redux-mock-store'
import renderer from 'react-test-renderer'

const mockStore = configureStore([])
const props = {
    getPlanets: () => {},
    getVehicles: () => {},
    findFalcon: () => {},
    clearResult:() => {},
    form: {getFieldDecorator:  jest.fn(o=>c=>c)}
}

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('<DestinationCard/>', () => {

    let store 
    let component

    beforeEach(() =>  {
        store  = mockStore({})
        component = renderer.create(
            <Provider store={store}>
                <Home.WrappedComponent  {...props}/>
            </Provider>
        )
    })

    it('Matches the snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })
})