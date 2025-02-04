import { Box } from '@mui/material';
import Header from '../../components/Header';
import ValeursInitial from '../../components/ValeursInitial'; // Updated import statement

const ValeursInitialComponent = () => {
    return (
        <Box m="20px">
            <Box display={'flex'} justifyContent="space-between" alignItems="center">
                <Header title="INITIAL DRAFT SURVEY" subtitle="Initial Draft Survey" />
            </Box>
            <Box height={700} m="20px">
                <ValeursInitial /> {/* Updated component reference */}
            </Box>
        </Box>
    )
}

export default ValeursInitialComponent;
