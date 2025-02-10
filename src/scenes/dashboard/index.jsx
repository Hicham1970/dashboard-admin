import { Box, Button, Typography, useTheme, IconButton } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

import StatBox from "../../components/StatBox";
import ProgressCircles from "../../components/ProgressCircles";
// import { useState } from "react";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [progress, setProgress] = useState(0);

  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
      {/* Grid & Charts  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        gridAutoRows="140px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          display="flex"
          backgroundColor={colors.grey[800]}
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600] }} />}
            fontSize="26px"
          />
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          backgroundColor={colors.grey[800]}
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,224"
            subtitle="Sails Obtained"
            progress="0.65"
            increase="+64%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600] }} />}
            fontSize="26px"
          />
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          backgroundColor={colors.grey[800]}
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.25"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600] }} />}
            fontSize="26px"
          />
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          backgroundColor={colors.grey[800]}
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,775"
            subtitle="Trafic Generated"
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600] }} />}
            fontSize="26px"
          />
        </Box>
        {/* Row 2 */}
        {/* Line Chart */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            displayContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $52,354,320
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transaction  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            sx={{ width: "100%" }}
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px s2olid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="20px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="5px"
              borderBottom={`2px dashed ${colors.primary[500]}`}
            >
              <Typography color={colors.greenAccent[500]} variant="h5">
                {transaction.txId}
              </Typography>

              <Typography color={colors.grey[100]} variant="h5">
                {transaction.user}
              </Typography>

              <Typography color={colors.grey[100]} variant="h5">
                {transaction.date}
              </Typography>

              <Typography
                backgroundColor={colors.greenAccent[500]}
                variant="h5"
                color={colors.grey[100]}
                borderRadius="4px"
              >
                {transaction.cost}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Row 3 Left */}
        <Box
          gridColumn="span 4"
          gridRows="span 1"
          height = "300px"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="bold" sx={{p:"30px 30px 0 30px"}}>
            Campaign
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
                      alignItems="center"
                      
            
          >
            <ProgressCircles size="125" />
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mt: "15px" }}
              color={colors.greenAccent[500]}
            >
              $48,252 revenue generated
            </Typography>
            <Typography variant="h5" fontWeight="600">
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>
        {/* Row 3 Middle */}
          <Box
          gridColumn="span 4"
                  gridRows="span 1"
                  height = "300px"
  backgroundColor={colors.primary[400]}
>
  <Typography variant="h5" fontWeight="bold" sx={{ mt: "15px" }}>
    Sales Quantity
  </Typography>
  <Box
    height=" 100%"
    mt="-2px"
    backgroundColor={colors.primary[400]}
  >
    <BarChart isDashboard={true} sx={{height: "inherit"}} />
  </Box>
</Box>
{/* Row 3 Right */}
<Box
  gridColumn="span 4"
                  gridRows="span 1"
                  height="300px"
  backgroundColor={colors.primary[400]}
  p="30px"
>
  <Typography variant="h5" fontWeight="bold" sx={{ mb: "15px" }}>
    Geography Based Traffic
  </Typography>
  <Box height="200px">
    <PieChart isDashboard={true} colorScale="nivo" />
  </Box>
</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
