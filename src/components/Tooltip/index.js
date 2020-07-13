import React from 'react'
import PropTypes from 'prop-types'

import { TooltipComponent, Content } from './styles'

export default function Tooltip({ position, target, children }) {
  return (
    <TooltipComponent placement={position} target={`#${target} `}>
      <Content>{children}</Content>
    </TooltipComponent>
  )
}

Tooltip.defaultProps = {
  position: 'top',
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  target: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
