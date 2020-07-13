import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import { ThemeProvider as ThemeProviderBase } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

export default function ThemeProvider({ children }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const theme = isDarkTheme ? dark : light
  return <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
