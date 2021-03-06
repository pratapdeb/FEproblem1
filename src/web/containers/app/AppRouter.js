import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Empty } from 'antd'
import Home from '../home'
import ResultPage from '../result'
import { connect } from 'react-redux'
const AppRouter = ({ pages, defaultPage }) => {
  return (
    <Switch>
      {pages.map(({ path, Component }, index) => (
        <Route
          key={path}
          strict={false}
          path={path}
          render={
                    () => <Component />
                }
        />
      ))}
      <Route exact path='/' render={() => <Redirect to={defaultPage} />} />
      <Route component={Empty} />
    </Switch>
  )
}

const basePages = [
  {
    path: '/home',
    Component: Home
  },
  {
    path: '/result',
    Component: ResultPage
  }

]

const mapStateToProps = ({ user }) => {
  return {
    defaultPage: basePages[0].path,
    pages: basePages
  }
}

export default withRouter(connect(mapStateToProps)(AppRouter))
