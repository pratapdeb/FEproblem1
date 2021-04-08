import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Result, Button } from 'antd'
import { clearResult } from '../../../redux/modules/app/actions'

class ResultPage extends React.Component {
  handleGoHome = () => {
    this.props.clearResult()
    this.props.history.push('/home')
  }

  render () {
    const { result: { status, planet_name } = {} } = this.props
    return (
      <Result
        status={status}
        title='AI Falcon Found'
        subTitle={`Plant: ${planet_name}`}
        extra={[
          <Button type='primary' onClick={this.handleGoHome} key='goHome'>Go Home</Button>
        ]}
      />
    )
  }
}

const mapStateToProps = ({ app: { result } }) => {
  return { result }
}
const mapDispatchToProps = {
  clearResult
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultPage))
