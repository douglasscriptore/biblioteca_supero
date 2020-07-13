import React, { useContext } from 'react'
import { Content } from './styles'
import { ThemeContext } from 'styled-components'

const Header = (props) => {
  return (
    <Content height={34} width={1060} speed={1.2} {...props}>
      <rect x="5" y="8" rx="0" ry="0" width={35} height={12} />

      <rect x="545" y="8" rx="0" ry="0" width={35} height={12} />
      <rect x="705" y="8" rx="0" ry="0" width={60} height={12} />
      <rect x="940" y="8" rx="0" ry="0" width={35} height={12} />
      <rect x="1020" y="8" rx="0" ry="0" width={30} height={12} />
    </Content>
  )
}
const TableRow = (props) => {
  const random = Math.random() * (1 - 0.7) + 0.7
  return (
    <Content
      height={34}
      width={1060}
      speed={1.2}
      {...props}
      viewBox="0 0 1060 34"
    >
      <rect x="5" y="8" rx="6" ry="6" width={300 * random * 1.2} height="10" />

      <rect x="545" y="8" rx="6" ry="6" width={80 * random} height="10" />
      <rect x="705" y="6" rx="3" ry="3" width={100 * random} height="10" />
      <rect x="940" y="6" rx="3" ry="3" width={40} height="10" />
      <rect x="1020" y="8" rx="3" ry="3" width={11} height="10" />
    </Content>
  )
}

const Loader = () => {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext.loadingTableColor)
  return (
    <>
      <Header
        primaryColor={themeContext.loadingTableColor}
        secondaryColor={themeContext.loadingTableColor}
        primaryOpacity={1}
        secondaryOpacity={0.6}
      />
      {Array(7)
        .fill('')
        .map((e, i) => (
          <TableRow
            key={i}
            style={{ opacity: Number(2 / i).toFixed(1) }}
            primaryColor={themeContext.loadingTableColor}
            secondaryColor={themeContext.loadingTableColor}
            primaryOpacity={1}
            secondaryOpacity={0.6}
          />
        ))}
    </>
  )
}

export default Loader
