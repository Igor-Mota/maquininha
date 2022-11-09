import { useState } from 'react'
import { Box } from '@mui/material'

import { ComponentBar } from 'src/common/components/componentBar'
import { NewReport } from 'src/common/components/newReport'
import { ListReports } from 'src/common/components/listReports'
import { fetcher } from 'src/framework/auth/useRefreshToken'
import { parseCookies } from 'nookies'

const items = [{ name: 'Novo' }, { name: 'Listar' }]

const Filters = () => {
  const [screen, setScreen] = useState('Novo')

  return (
    <Box flexDirection='column' width='100%'>
      <ComponentBar items={items} active={screen} change={setScreen} />
      <Box width='100%' mt={15}>
        {screen === 'Novo' && <NewReport />}
        {screen === 'Listar' && <ListReports />}
      </Box>
    </Box>
  )
}

export async function getServerSideProps(ctx: any) {
  const { authorization } = parseCookies(ctx)

  const { status } = await fetcher(authorization)

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

export default Filters
