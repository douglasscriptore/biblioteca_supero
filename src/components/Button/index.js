import React from 'react'
import PropTypes from 'prop-types'

import { ButtonBase } from './styles'

export default function Button({ children, refChild = null, ...rest }) {
  return (
    <ButtonBase ref={refChild} {...rest}>
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  refChild: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
}

Button.defaultProps = {
  color: 'default',
  fill: 'false',
  round: 'false',
}
