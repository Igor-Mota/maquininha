import { useState } from 'react'
import { Box } from '@mui/material'
import { fetcher } from 'src/framework/auth/useRefreshToken'
import { ComponentBar } from 'src/common/components/componentBar'
import { NewUser } from 'src/common/components/newUser'
import { ListUser } from 'src/common/components/listUser'

const items = [{ name: 'Novo' }, { name: 'Listar' }]

const Users = () => {
  const [screen, setScreen] = useState('Novo')

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

export async function getServerSideProps(ctx: any) {
  const { data, status } = await fetcher()
  if (data.response.data.success === false) {
    return {
      redirect: {
        permanent: false,
        destination: `/`
      }
    }
  }

  return {
    props: {}
  }
}

export default Users
