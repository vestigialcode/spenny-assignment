import styled from "styled-components";
import { BROWN } from "../../constants";

export const StyledSpinner = styled.img`
  width: 200px;
  margin: auto;
  display: block;
`;

export const SpinnerText = styled.div`
  color: ${BROWN};
  text-align: center;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 100px;
`;
