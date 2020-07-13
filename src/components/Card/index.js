import React from 'react'
import PropTypes from 'prop-types'

import { Card as CardComponent } from './styles'

export default function Card({ children, height, padding }) {
  return (
    <CardComponent height={height} padding={padding}>
      {children}
    </CardComponent>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  height: PropTypes.string,
  padding: PropTypes.string,
}

Card.defaultProps = {
  height: 'full',
  padding: '15px 0 15px 0',
}
