import styled from "styled-components";
import { BROWN } from "../../constants";

export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

export const StyledInput = styled.input.attrs({ type: "text" })`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  height: 56px;
  padding: 16px;
  width: 50%;
  position: absolute;
`;

export const SearchButton = styled.button`
  background-color: ${BROWN};
  border: 0;
  border-radius: 20px;
  color: #fff;
  padding: 16px 24px;
  align-self: flex-end;
  align-items: right;
  z-index: 1;
  margin-right: 10px;
  cursor: pointer;
`;

export const SearchButtonMap = styled(SearchButton)`
  align-self: flex-start;
`;

export const StyledInputMap = styled(StyledInput)`
  position: relative;
  display: block;
  width: 100%;
`;

export const StyledInputWrapMap = styled(StyledInputWrap)`
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 16px;
`;
