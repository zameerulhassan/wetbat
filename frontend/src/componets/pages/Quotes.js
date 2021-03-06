import React, { useState } from "react";
import Wrapper from "../layout/Wrapper";
const Quotes = () => {
  let [name, setName] = useState("zam");
  return (
    <Wrapper styles="content">
      <h1>{name}</h1>
      <button onClick={()=>setName("hassan")}>change</button>
    </Wrapper>
  );
};

export default Quotes;
