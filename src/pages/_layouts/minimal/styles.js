import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  height: -webkit-fill-available;
  height: -moz-fill-available;
  padding: 50px 100px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`

export const Content = styled.div`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1;
  height: 100%;
  height: -webkit-fill-available;
  height: -moz-fill-available;
`
