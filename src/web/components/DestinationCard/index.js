import { React, Component } from "react";
import { Select, Col, Card } from 'antd';
import { isEmpty, find } from 'lodash'
import './index.css'

const { Option } = Select;
class DestinationCard extends Component {
    state = {}
    static getDerivedStateFromProps(props, state) {
        const { planets, vehicles } = props
        return {planets, vehicles}
    }
    buildOption = (options = []) => {
        return options.map(option => (<Option value={option.name} key={option.name}>{`${option.name} ${option.total_no ? '(' + option.total_no +')' :''}`}</Option>))
    }

    handlePlanetChange = (selectedPlanet) => {
        const { planets } = this.state
        const slPlanetObject = find(planets, ['name', selectedPlanet])
        const { distance } = slPlanetObject || []
        this.setState({distance})
        this.props.handlePlanetChange(selectedPlanet, this.props.title)
    }
    handleVehicleChange = (selectedVehicle) => {
       this.props.handleVehicleChange(selectedVehicle,this.props.title)
    }

    capacityFilter = () => {
        const { vehicles, distance } = this.state
        if(distance) { 
            const filteredVehicles =  vehicles.filter(v=> v.max_distance >= distance)
            return filteredVehicles
        }
        else return vehicles
    }
    render() {
        const { planets } = this.state
        const { title } = this.props
        const filteredVehicles  = this.capacityFilter()
        return <Col span={8} className='column'>
            <Card title={title}>
               { !isEmpty(planets) &&  <Select  className = 'select'  placeholder = 'Select Planet' onChange={this.handlePlanetChange}>
                   { this.buildOption(planets) }
                </Select>}
                { !isEmpty(filteredVehicles) && <Select  className = 'select' placeholder = 'Select Vehicle' onChange={this.handleVehicleChange}>
                    { this.buildOption(filteredVehicles) }
                </Select> }
            </Card>
        </Col>
    }
}


export default DestinationCard