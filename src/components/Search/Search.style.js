import styled from "styled-components";


export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
`;

export const StyledInput = styled.input.attrs({ type: "text" })`
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  height: 50px;
  padding: 16px;
  width: 80%;
  position: absolute;
  font-size:medium;
`;

export const SearchButton = styled.button`
  background-color: black;
  border: 0;
  border-radius:30px;
  color: white;
  padding: 16px 24px;
  align-self: flex-end;
  align-items: right;
  z-index: 0;
  margin-right: 1px;
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
