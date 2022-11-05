// ** Icon imports

import HomeOutline from 'mdi-material-ui/HomeOutline'
import { Calendar, Pen, Account, FileDocumentMultiple } from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'users',
      icon: Account,
      path: '/user'
    },
    {
      title: 'Relatorios',
      icon: FileDocumentMultiple,
      path: '/reports'
    },
    {
      title: 'Cadastrar',
      icon: Pen,
      path: '/new/report'
    }
  ]
}

export default navigation
