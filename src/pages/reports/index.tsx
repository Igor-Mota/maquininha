import { useState } from 'react'
import { Box } from '@mui/material'
import { useSession } from 'src/@core/hooks/useSession'
import { ComponentBar } from 'src/common/components/componentBar'
import { NewReport } from 'src/common/components/newReport'
import { ListReports } from 'src/common/components/listReports'

const items = [{ name: 'Novo' }, { name: 'Listar' }]

const Filters = () => {
  const [screen, setScreen] = useState('Novo')
  useSession()

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

export default Filters
