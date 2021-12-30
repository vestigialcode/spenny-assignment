import styled, { createGlobalStyle } from "styled-components";
import { BLACK_LIGHT, GRAY_LIGHT, PHONE_BREAK } from "./constants";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing:border-box;
    margin: 0;
    padding:0;
    font-family:'Source Sans Pro', sans-serif;  
}
body{
  background-color: white;
  
}
`;
export default GlobalStyle;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media only screen and (max-width: ${PHONE_BREAK}) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const PageContainer = styled.div``;

export const Button = styled.button`
  border-radius: 4px;
  background: ${BLACK_LIGHT};
  white-space: nowrap;
  padding: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${GRAY_LIGHT};
  }
  @media screen and (max-width: ${PHONE_BREAK}) {
    width: 100%;
  }
`;

export const Row = styled.div`
  padding: 80px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.swap ? "row-reverse" : "row")};
  gap: 0 60px;
  @media (max-width: ${PHONE_BREAK}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 20px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.swap ? "column-reverse" : "column")};
  flex: 1;
`;
