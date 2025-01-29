import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import tokens from '../../theme';   
import { useTheme } from '@mui/material';

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display={'flex'} justifyContent="space-between" alignItems="center">
                <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
            </Box>
            <Box
                height="75vh"
                border = "6px solid #58c6b8"
                m="20px"
                borderRadius="4px"
            >
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography
