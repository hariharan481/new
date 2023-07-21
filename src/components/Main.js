import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import "../styles/Main.css";

import "../styles/TabularSearch.css";


import { TabularSearch } from "./TabularSearch/TabularSearch";
import { IndexSearch } from "./IndexSearch/IndexSearch";

export const Main = () => {
  return (
    <div>
      <Container maxWidth="0.5%">
        <Stack direction={"row"} gap={"0.5%"} mt={2.5}ml={"1%"}>
          <IndexSearch/>
          <TabularSearch/>
        
        </Stack>
      </Container>
    </div>
  );
};
