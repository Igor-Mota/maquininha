import { useRouter } from 'next/router'
import { fetcher } from 'src/framework/auth/useRefreshToken'
import { useSession } from '../../@core/hooks/useSession'
import { parseCookies } from 'nookies'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Box, IconButton } from '@mui/material'

// ** Icons Imports
import { AiTwotoneCalendar } from 'react-icons/ai'
// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

const Dashboard = ({ props }: any) => {
  const { push } = useRouter()

  return (
    <ApexChartWrapper>
      <Box ml={25} mt={10}>
        <Grid container spacing={6}>
          <Grid container spacing={6}>
            <IconButton onClick={() => push('/reports')}>
              <AiTwotoneCalendar color='red' size={50} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </ApexChartWrapper>
  )
}

export async function getServerSideProps(ctx: any) {
  const { authorization } = parseCookies(ctx)

  const { data, status } = await fetcher(authorization)

  if (status !== 200) {
    return {
      redirect: {
        permanent: false,
        destination: `/`
      }
    }
  } else {
    return {
      props: {}
    }
  }
}

export default Dashboard
