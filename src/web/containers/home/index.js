import React from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Layout, Button, message } from 'antd'
import DestinationCard from '../../components/DestinationCard'
import { connect } from 'react-redux'
import { getPlanets, getVehicles, findFalcon, clearResult } from '../../../redux/modules/app/actions'
import { findIndex, isEmpty } from 'lodash'
import './index.css'
import logo from '../../../assets/logo.svg'

const { Header, Content, Footer } = Layout

const availablePlanets = [1, 2, 3, 4]

class Home extends React.Component {
    state = {
      selectedPlanets: {},
      selectedVehicles: {}
    }
    // fetch the Planets and vehicles usign redux-saga
    componentDidMount () {
      const { getPlanets, getVehicles } = this.props
      getPlanets()
      getVehicles()
    }
    // called form child component to keep track of selected planets
    handlePlanetChange = (selectedPlanet, title) => {
      const { selectedPlanets } = this.state
      selectedPlanets[title] = selectedPlanet
      this.setState({ selectedPlanets: { ...selectedPlanets } })
    }
    // called form child component to keep track of selected Vehicles
    handleVehicleChange = (selectedVehicle, title) => {
      const { selectedVehicles } = this.state
      selectedVehicles[title] = selectedVehicle
      this.setState({ selectedVehicles: { ...selectedVehicles } })
    }

    // filter vehicles based on number of available vehicles, Capacity based filter are done at child level
    getFilteredVehicles = (vehicles) => {
      const { selectedVehicles } = this.state
      if (isEmpty(vehicles)) return []
      Object.values(selectedVehicles).forEach(vehicleName => {
        const index = findIndex(vehicles, ['name', vehicleName])
        vehicles[index].total_no = vehicles[index].total_no - 1
      })
      const filteredVehicles = vehicles.filter(v => v.total_no > 0)
      return filteredVehicles
    }
    // send request to redux-saga to get token and find AI falcon
    handleFindFalcon = () => {
      const { selectedVehicles, selectedPlanets } = this.state
      const data = {
        planet_names: Object.values(selectedPlanets),
        vehicle_names: Object.values(selectedVehicles)
      }
      this.props.findFalcon(data)
    }
    // process result to redirect to success page or clear error
    processResult = (result) => {
      const { status, error } = result
      if (status === 'success') this.props.history.push('/result')
      if (error) {
        message.error(error)
        this.props.clearResult()
      }
    }

    render () {
      const { planets = [], vehicles = [], result = {}, loading = false } = this.props
      const { selectedPlanets } = this.state
      if (result) this.processResult(result)
      const filteredPlanets = planets.filter(p => !Object.values(selectedPlanets).includes(p.name))  // filter Planets if alredy slected for other destination
      const filteredVehicles = this.getFilteredVehicles(vehicles.map(o => ({ ...o })))
      const destinationCard = availablePlanets.map(card => (<DestinationCard planets={filteredPlanets} vehicles={filteredVehicles} title={`Destination${card}`} key={card} onPlanetChange={this.handlePlanetChange} onVehicleChange={this.handleVehicleChange} />))
      return (
        <Layout className='layout'>
          <Header className='header'><div className='logo' /><img src={logo} alt='Logo' /></Header>
          <Content className='content'>
            <Row gutter={16}> {destinationCard} </Row>
            <Button className='button' loading={loading} type='primary' onClick={this.handleFindFalcon}> Find Felcon</Button>
          </Content>
          <Footer className='footer' style={{ textAlign: 'center' }}> ©2021  Finding AI Falcon</Footer>
        </Layout>
      )
    }
}

const mapStateToProps = ({ app: { planets, vehicles, result, loading } }) => {
  return {
    planets,
    vehicles,
    result,
    loading
  }
}

const mapDispatchToProps = {
  getPlanets,
  getVehicles,
  findFalcon,
  clearResult
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
