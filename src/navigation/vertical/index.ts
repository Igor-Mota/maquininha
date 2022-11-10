// ** Icon imports

import HomeOutline from 'mdi-material-ui/HomeOutline'
import { Power, Pen, Account, FileDocumentMultiple } from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { icons } from 'react-icons'

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
      title: 'sair',
      icon: Power,
      path: '/singnout'
    }
  ]
}

export default navigation
