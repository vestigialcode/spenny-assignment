import React from "react";
import spinner from "./spenny.svg";
import { SpinnerText, StyledSpinner } from "./Spinner.style";
import { PageContainer } from "../../globalStyles";

const Spinner = () => {
  return (
    <PageContainer>
      <StyledSpinner src={spinner} />
      <SpinnerText>Loading...</SpinnerText>
    </PageContainer>
  );
};

export default Spinner;
