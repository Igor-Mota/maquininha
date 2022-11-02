// ** Icon imports

import HomeOutline from 'mdi-material-ui/HomeOutline'
import { Calendar } from 'mdi-material-ui'
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
      title: 'Filtros',
      icon: Calendar,
      path: '/filter'
    }
  ]
}

export default navigation
