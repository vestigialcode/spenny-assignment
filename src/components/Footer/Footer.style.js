import styled from "styled-components";
import { Link } from "react-router-dom";
import {  PHONE_BREAK,  DEEP_BLUE } from "../../constants";

export const FooterContainer = styled.div`
  background-color: ${(props) => (props.swap ? `${DEEP_BLUE}` : `${DEEP_BLUE}`)};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${PHONE_BREAK}) {
    padding: 0 20px;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1100px;
  width: 100%;
  font-size: 20px;
`;

export const FooterItem = styled.div`
  color: #fff;
  font-size: 17;
`;

export const Logo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
