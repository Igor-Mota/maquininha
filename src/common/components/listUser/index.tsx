import { useEffect, useState } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  IconButton,
  Card,
  Typography,
  Input
} from '@mui/material'
import { ChevronDown } from 'mdi-material-ui'
import Modal from 'react-modal'
import { EditUser } from '../editUser'
import { useQuery } from 'react-query'
import { http } from 'src/framework/http/http'
import { API_ENDPOINTS } from 'src/framework/http/utils/endpoints'
import { FileEdit, Delete } from 'mdi-material-ui'
import Swal from 'sweetalert2'

function query(user_id: string) {
  const url = new URL(`https://maquininhasas.herokuapp.com${API_ENDPOINTS.get_users}`)
  url.searchParams.append('user_id', user_id)
  return url
}

export const ListUser = () => {
  const [user_id, setUser_id] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [current_id, setCurrent_id] = useState<string>('')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [username, setUsername] = useState<string>()
  const [usersForSearch, setUsersForSearch] = useState<any>()

  const fetcher = async () => {
    const { data } = await http.get(query(user_id).href)

    return data
  }

  const handleRefresh = () => {
    if (username === '') {
      return setUsersForSearch(data.data)
    }
    setUsersForSearch((current: any) => {
      return data.data.filter((el: any) => {
        if (el.username === username) {
          return el
        }
      })
    })
  }

  const useGetUsers = () => {
    return useQuery([API_ENDPOINTS.get_users], fetcher)
  }

  const { data, isLoading } = useGetUsers()

  const handleDelete = async (id: string) => {
    const { value } = await Swal.fire({
      title: 'Tem certeza que deseja deletar este usuario',
      icon: 'warning',
      showCancelButton: true
    })
  }
  const handleEdit = (id: string) => {
    setShowModal(true)
    setCurrent_id(id)
  }

  useEffect(() => {
    console.log(data)
    if (data && 'data' in data) {
      if (Array.isArray(data.data)) {
        setUsersForSearch(data.data)
      } else {
        setUsersForSearch([data.data])
      }
    }
  }, [data])

  if (!data || isLoading) return <></>

  return (
    <div style={{ maxWidth: '100%' }}>
      <Box ml={10} position='relative' mr={10} display='flex' justifyContent='flex-end'>
        <IconButton onClick={() => setFiltersOpen(current => !current)}>
          <ChevronDown />
        </IconButton>
        {filtersOpen && (
          <Box position='absolute' top={50} zIndex={9999}>
            <Card>
              <Box padding={4}>
                <Typography>Nome de usuario</Typography>
                <Input aria-label='Numero da maquina' value={username} onChange={e => setUsername(e.target.value)} />
              </Box>
            </Card>
          </Box>
        )}
        <Box>
          <Button variant='contained' disabled={isLoading} onClick={handleRefresh}>
            Buscar
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Nome de usuario</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Deletar</TableCell>
            </TableRow>
          </TableHead>

          {usersForSearch &&
            usersForSearch.map((el: any) => {
              return (
                <TableBody key={el.id}>
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.username}</TableCell>
                  <TableCell>{el.level}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        handleEdit(el.id)
                      }}
                    >
                      <FileEdit />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleDelete(el.id)}>
                      <Delete />
                    </Button>
                  </TableCell>
                </TableBody>
              )
            })}
        </Table>
      </TableContainer>
      <Modal
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            background: 'rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,

            zIndex: 9999
          },
          content: {
            margin: '0 auto',
            width: '60%',
            padding: 0,
            marginLeft: 250,
            background: '#28243D'
          }
        }}
      >
        <EditUser
          user={
            Array.isArray(data.data)
              ? data.data.find((el: any) => el.id === current_id)
              : 'id' in data.data && data.data.id
          }
        />
      </Modal>
    </div>
  )
}
