import React from "react";
import { Box } from "@material-ui/core";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      </Box>
      <Box height={650} m="20px">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
