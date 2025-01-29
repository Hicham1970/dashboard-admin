import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
    return (
        <Box m="20px">
            <Box display={'flex'} justifyContent="space-between" alignItems="center">
                <Header title="LINE CHART" subtitle="Simple Line Chart" />
            </Box>
            <Box height={700} m="20px">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line
