import { React, Component } from 'react'
import { Select, Col, Card } from 'antd'
import { isEmpty, find } from 'lodash'
import './index.css'

const { Option } = Select
class DestinationCard extends Component {
    state = {}
    // update the state once parent poprs are received 
    static getDerivedStateFromProps (props, state) {
      const { planets, vehicles } = props
      return { planets, vehicles }
    }
    // common funciton to generent options for Select
    buildOption = (options = []) => {
      return options.map(option => (<Option value={option.name} key={option.name}>{`${option.name} ${option.total_no ? '(' + option.total_no + ')' : ''}`}</Option>))
    }
    // calls parent to update the selected Planets 
    handlePlanetChange = (selectedPlanet) => {
      const { planets } = this.state
      const slPlanetObject = find(planets, ['name', selectedPlanet])
      const { distance } = slPlanetObject || []
      this.setState({ distance })
      this.props.onPlanetChange(selectedPlanet, this.props.title)
    }
    // calls parent to update the selected vehicles 
    handleVehicleChange = (selectedVehicle) => {
      this.props.onVehicleChange(selectedVehicle, this.props.title)
    }

    // filter out the vehicle if the planet distance is more than its maximum distance
    capacityFilter = () => {
      const { vehicles, distance } = this.state
      if (distance) {
        const filteredVehicles = vehicles.filter(v => v.max_distance >= distance)
        return filteredVehicles
      } else return vehicles
    }

    render () {
      const { planets } = this.state
      const { title } = this.props
      const filteredVehicles = this.capacityFilter()
      return (
        <Col span={8} className='column'>
          <Card title={title}>
            {
            !isEmpty(planets) &&
              <Select className='select' placeholder='Select Planet' onChange={this.handlePlanetChange}>
                {this.buildOption(planets)}
              </Select>
            }
            {
            !isEmpty(filteredVehicles) &&
              <Select className='select' placeholder='Select Vehicle' onChange={this.handleVehicleChange}>
                {this.buildOption(filteredVehicles)}
              </Select>
            }
          </Card>
        </Col>
      )
    }
}

export default DestinationCard
