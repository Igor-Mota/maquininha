import { useEffect } from 'react'
import { Card, Button, TextField, Grid, Typography, Box, Select, MenuItem } from '@mui/material'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updateUser } from 'src/common/rules/validations'
import { useRegisterUser } from 'src/framework/auth/useRegisterUser'
import { useUpdateUser } from 'src/framework/user/updateUser'

import 'react-toastify/dist/ReactToastify.css'

interface Props {
  user: {
    id: string
    username: string
    name: string
    stores: string[]
    machines: string[]
    level: 'root' | 'admin' | 'client' | 'manager' | 'attendant'
  }
}

export const EditUser = ({ user }: Props) => {
  //
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(updateUser) })

  const { mutate, data, isLoading, error: api_error } = useUpdateUser()

  useEffect(() => {
    console.log(user)
    setValue('username', user.username)
    setValue('name', user.name)
    setValue('stores', Array.isArray(user.stores) ? user.stores.join() : '')
    setValue('machines', Array.isArray(user.machines) ? user.machines.join() : '')

    //@ts-ignore
    if (api_error?.response?.data?.msg) {
      setError('username', { type: 'onChange', message: ' : Este usuario ja existe' })
    }

    if (data?.status === 201) {
      toast.success('Usuario criado com sucesso')
      reset()
    }
  }, [api_error, data])

  const handleCreateUser = async (data: any) => {
    if (data.password !== data.repeatPassword) {
      setError('password', { type: 'onChange', message: ': O campo senha e repetir senha nao sao iguais' })
      setError('repeatPassword', { type: 'onChange', message: ': O campo senha e repetir senha nao sao iguais' })
    }

    console.log(data)

    mutate(data)
  }

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: '#28243D',
        height: '100%',
        overflow: 'auto',
        padding: 5
      }}
    >
      <Typography variant='h3' mb={6}>
        Atualizar informaçoes
      </Typography>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <Grid container spacing={12} px={10}>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Nome de usuario</Typography>
              <Typography variant='body2' color='red'>
                {errors.username?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('username')} />
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Nome</Typography>
              <Typography variant='body2' color='red'>
                {errors.name?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('name')} />
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Senha</Typography>
              <Typography variant='body2' color='red'>
                {errors.password?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('password')} />
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Repetir senha</Typography>
              <Typography variant='body2' color='red'>
                {errors['repeatPassword']?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('repeatPassword')} />
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Lojas (separadas por virgula)</Typography>
              <Typography variant='body2' color='red'>
                {errors.stores?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('stores')} />
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>maquinas (separadas por virgula)</Typography>
              <Typography variant='body2' color='red'>
                {errors.machines?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('machines')} />
          </Grid>

          {user.level !== 'root' && (
            <Grid item xs={6}>
              <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
                <Typography variant='body2'>Cargo</Typography>
                <Typography variant='body2' color='red'>
                  {errors.level?.message}
                </Typography>
              </Box>
              <Select
                defaultValue={user.level}
                autoFocus
                fullWidth
                {...register('level')}
                sx={{ position: 'relative' }}
              >
                <MenuItem value='admin'>Administrador</MenuItem>
                <MenuItem value='manager'>Gerente</MenuItem>
                <MenuItem value='client'>Cliente</MenuItem>
                <MenuItem value='attendant' defaultChecked={true}>
                  Atendente
                </MenuItem>
              </Select>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button fullWidth variant='contained' type='submit' disabled={isLoading}>
              Atualizar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
