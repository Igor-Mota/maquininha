import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material'
import { FileEdit, Delete } from 'mdi-material-ui'
import { useGetUsers } from 'src/framework/user'
import Swal from 'sweetalert2'

export const ListUser = () => {
  const { data, isLoading } = useGetUsers()

  if (!data || isLoading) return <></>
  const handleDelete = async (id: string) => {
    const { value } = await Swal.fire({
      title: 'Tem certeza que deseja deletar este usuario',
      icon: 'warning',
      showCancelButton: true
    })
  }

  return (
    <div style={{ maxWidth: '100%' }}>
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
          <TableBody>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>
              <Button>
                <FileEdit />
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => handleDelete('1')}>
                <Delete />
              </Button>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Modal
        isOpen={false}
        style={{
          overlay: {
            background: 'rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
          },
          content: {
            margin: 0,
            padding: 0,
            background: '#28243D'
          }
        }}
      >
        <EditUser />
      </Modal> */}
    </div>
  )
}
