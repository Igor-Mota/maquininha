import { useState } from 'react'
import { Box } from '@mui/material'
import { useSession } from 'src/@core/hooks/useSession'
import { ComponentBar } from 'src/common/components/componentBar'
import { NewUser } from 'src/common/components/newUser'
import { ListUser } from 'src/common/components/listUser'

const items = [{ name: 'Novo' }, { name: 'Listar' }]

const Users = () => {
  const [screen, setScreen] = useState('Novo')
  useSession()

  return (
    <Box flexDirection='column' width='100%'>
      <ComponentBar items={items} active={screen} change={setScreen} />
      <Box width='100%' mt={15}>
        {screen === 'Novo' && <NewUser />}
        {screen === 'Listar' && <ListUser />}
      </Box>
    </Box>
  )
}

export default Users
