import { Box } from '@mui/material';
import Header from '../../components/Header';
import DS from '../../components/DSManual'; // Updated import statement

const DSManualComponent = () => {
  return (
    <Box m="20px">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="MANUAL DRAFT SURVEY" subtitle="Manual Draft Survey Report" />
      </Box>
      <Box height={700} m="20px">
        <DS /> {/* Updated component reference */}
      </Box>
    </Box>
  )
}

export default DSManualComponent;
