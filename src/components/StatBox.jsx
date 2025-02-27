import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from './../theme';
import ProgressCircles from './ProgressCircles';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box width="100%" m="0 3px"
        >
            <Box display = "flex" justifyContent="space-between" alignItems="center">
                <Box>
                {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                        {title}
                    </Typography>
                    </Box>
                    <Box>
                        <ProgressCircles progress={progress} />
                    </Box>
            </Box>
            <Box display='flex' justifyContent="space-between">
                <Typography variant="h5" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle="italic" sx={{ color: colors.greenAccent[400] }}>
                    {increase}
                </Typography>
                
            </Box>
        </Box>
    )
 }


export default StatBox