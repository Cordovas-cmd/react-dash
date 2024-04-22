import { Box , Button, IconButton, Typography, useTheme} from '@mui/material';
import { tokens } from "../../theme"
import Header from '../../components/Header';
const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome, please see info below." />
            </Box>
        </Box>
    )
}

export default Dashboard;