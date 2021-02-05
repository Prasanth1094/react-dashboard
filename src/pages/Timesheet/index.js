import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import {TenantContainer, TenantListContainer} from 'pages/Tenant/containers/index'
import AppLayout from 'layouts/AppLayout'

const TenantRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/list`} exact component={props => AppLayoutHOC(TenantListContainer, props)} />
    <Route path={`${url}/add`} exact component={props => AppLayoutHOC(TenantContainer, props)} />
    <Route path={`${url}/:id`} exact component={props => AppLayoutHOC(TenantContainer, props)} />
  </Switch>
)

TenantRoutes.propTypes = {
  match: PropTypes.object
}

export default TenantRoutes

export const AppLayoutHOC = (Component, props) => {
  return (
    <AppLayout>
      <Component {...props} />
    </AppLayout>
  )
}
