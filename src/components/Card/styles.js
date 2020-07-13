import styled, { css } from "styled-components";

export const Container = styled.div`
  /* background: ${(props) => props.theme.cardBackgroud}; */
  /* width: -webkit-fill-available; */
  display: flex;
  height: 100%;
  flex-direction: column;

`;

export const Card = styled.div`
  background: ${(props) => props.theme.cardBackgroud};
  height: ${(props) => (props.height === "full" ? "100%" : "auto")};
  padding: ${(props) => props.padding};
  border-radius: 5px;
  flex: ${(props) => (props.height === "full" ? "1 1" : "auto auto")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${(props) =>
    props.theme.name === "dark"
      ? css`
          box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
        `
      : css`
          box-shadow: 0 1px 15px 0 hsla(0, 0%, 48.2%, 0.05);
        `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 15px;
    height: 40px;

    h3 {
      flex-grow: 1;
      font-weight: 300;
      min-width: 175px;
    }
    h4 {
      min-width: 200px;
    }

    nav {
      width: 100%;
      align-items: center;
    }

    > div {
      height: auto;
      input {
        width: 200px;
      }
    }
  }

  footer {
    display: flex;
    width: 100%;
    padding: 0 15px;
    justify-content: end;
    flex-direction: column;
  }
`;
