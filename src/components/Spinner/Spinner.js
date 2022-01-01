import React from "react";


import {  StyledSpinner } from "./Spinner.style";
import { PageContainer } from "../../globalStyles";
import spinner from "./preview.gif";

const Spinner = () => {
  return (
    <PageContainer>
      <StyledSpinner src={spinner} />
      
    </PageContainer>
  );
};

export default Spinner;
