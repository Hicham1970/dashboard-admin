import { Box } from '@mui/material';
import Header from '../../components/Header';
import ValeursFinal from '../../components/ValeursFinal'; // Updated import statement

const ValeursInitialComponent = () => {
  return (
    <Box m="20px">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="FINAL DRAFT SURVEY" subtitle="FINAL Draft Survey" />
      </Box>
      <Box height={700} m="20px">
        <ValeursFinal /> {/* Updated component reference */}
      </Box>
    </Box>
  )
}

export default ValeursInitialComponent;
