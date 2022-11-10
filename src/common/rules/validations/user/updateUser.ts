import { string, object, mixed, array } from 'yup'

export const updateUser = object({
  username: string().required(' : Nome de usuario e obrigatorio'),
  name: string().required(' : Nome e obrigatorio'),
  store: string(),
  machines: string(),
  level: mixed().oneOf(['admin', 'manager', 'attendant', 'client'])
})
