import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from './../theme';

const ProgressCircles = ({ progress = "0.75", size = "40" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return (
        <Box 
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                             conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                             ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography 
                variant="caption" 
                component="div" 
                color="colors.blueAccent[500]"
            >
                {`${Math.round(progress * 100)}%`}
            </Typography>
        </Box>
    );
};

export default ProgressCircles;