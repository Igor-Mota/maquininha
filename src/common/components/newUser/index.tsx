import { useEffect } from 'react'
import { Card, Button, TextField, Grid, Typography, Box, Select, MenuItem } from '@mui/material'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUser } from 'src/common/rules/validations'
import { useRegisterUser } from 'src/framework/auth/useRegisterUser'
import 'react-toastify/dist/ReactToastify.css'

export const NewUser = () => {
  //

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createUser) })

  const { mutate, isLoading, error: api_error, data } = useRegisterUser()

  useEffect(() => {
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
    mutate(data)
  }

  return (
    <Card
      sx={{
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        py: 8
      }}
    >
      <Typography variant='h3' mb={6}>
        Adicionar novo usuario
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
              <Typography variant='body2'>Cargo</Typography>
              <Typography variant='body2' color='red'>
                {errors.level?.message}
              </Typography>
            </Box>
            <Select defaultValue='attendant' autoFocus fullWidth {...register('level')}>
              <MenuItem value='admin'>Administrador</MenuItem>
              <MenuItem value='manager'>Gerente</MenuItem>
              <MenuItem value='client'>Client</MenuItem>
              <MenuItem value='attendant' defaultChecked={true}>
                Atendente
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant='contained' type='submit' disabled={isLoading}>
              Criar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
