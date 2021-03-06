import React from "react";
import Summary from "../Summary/Summary";
import Status from "../Status/Status";
import Charts from "../Charts/Charts";
import Destination from "../Destination/Destination";

import Wrapper from "../layout/Wrapper";
const Main = () => {
  return (
    <Wrapper styles="content">
      <Summary />
      <Status />
      <Destination />
      <Charts />
    </Wrapper>
  );
};

export default Main;
