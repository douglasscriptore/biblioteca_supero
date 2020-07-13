import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

// layouts
import MinimalLayout from '../pages/_layouts/minimal'

export default function RouteWrapper({ component: Component, ...rest }) {
  const Layout = MinimalLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}
