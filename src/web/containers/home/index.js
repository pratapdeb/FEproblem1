import React from 'react'
import {withRouter} from 'react-router-dom'
import { Row, Card, Select } from 'antd'
import DestinationCard from '../../components/DestinationCard'
import { connect } from 'react-redux'
import {getPlanets, getVehicles} from '../../../redux/modules/app/actions'
import { findIndex} from 'lodash'

const {Option} = Select
const availablePlanets  = [1,2,3,4]

class Home extends React.Component {
    state = {
        selectedPlanets : {},
        selectedVehicles: {}
    }
    componentDidMount () {
        const {getPlanets, getVehicles} = this.props
        getPlanets()
        getVehicles()
    }
    handlePlanetChange = (selectedPlanet, title) => {
        const { selectedPlanets} = this.state
        const { planets } = this.props
        selectedPlanets[title] =  selectedPlanet
        this.setState({selectedPlanets: {...selectedPlanets} })
    }
    handleVehicleChange = (selectedVehicle, title) => {
        const { selectedVehicles} = this.state
        selectedVehicles[title] =  selectedVehicle
        this.setState({selectedVehicles: {...selectedVehicles}})
    }
    handleMultiSelectChange = (x,y,z) => {
        return ''
    }
    getFilteredVehicles = (vehicles) => {
        const { selectedVehicles } = this.state
        Object.values(selectedVehicles).map(vehicleName=> {
            const index =  findIndex(vehicles, ['name',vehicleName])
           vehicles[index].total_no = vehicles[index].total_no - 1
        })
        const filteredVehicles = vehicles.filter(v=> v.total_no > 0 )
        return filteredVehicles
    }
    render() {
        const {planets, vehicles} = this.props
        const {selectedPlanets} = this.state
        const filteredPlanets = planets.filter(p=> !Object.values(selectedPlanets).includes(p.name))
        const filteredVehicles = this.getFilteredVehicles(vehicles.map(o=>({...o})))
        const destinationCard =  availablePlanets.map(card => (<DestinationCard planets ={filteredPlanets} vehicles={filteredVehicles} title = {`Destination${card}`} key= {card} handlePlanetChange = {this.handlePlanetChange} handleVehicleChange = {this.handleVehicleChange}/>))
        return  <div className="site-card-wrapper">
        <Row gutter={16}>
            {destinationCard}
        </Row>
      </div>
    }
}

const mapStateToProps = ({ app: {planets, vehicles} }) => {
return {
    planets,
    vehicles
}
}

const mapDispatchToProps = {
    getPlanets,
    getVehicles
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))