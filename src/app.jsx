import React from "react";
import Button from "./button";
import { Web } from "./style";

const App = () => {
  return (
    <Web>
      <Button value={"Shake btn with loader"} bg={"danger"} anime="shake" loader={true} />
      <Button value={"Blob anime"} bg={"success"} anime="blob" />
      <Button value={"Warning btn"} bg={"warning"} />
      <Button value={"Dark btn"} bg={"dark"} />
      <Button value={"Light btn with loader"} loader={true} />
    </Web>
  );
};

export default App;
