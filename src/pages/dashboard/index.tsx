import { useRouter } from 'next/router'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Box, IconButton } from '@mui/material'

// ** Icons Imports
import { AiTwotoneCalendar } from 'react-icons/ai'
// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

const Dashboard = () => {
  const { push } = useRouter()
  return (
    <ApexChartWrapper>
      <Box ml={25} mt={10}>
        <Grid container spacing={6}>
          <Grid container spacing={6}>
            <IconButton onClick={() => push('/filter')}>
              <AiTwotoneCalendar color='red' size={50} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </ApexChartWrapper>
  )
}

export default Dashboard
