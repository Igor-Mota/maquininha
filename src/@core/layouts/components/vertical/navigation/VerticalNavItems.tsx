import { useState, useEffect } from 'react'
// ** Types Import
import { Settings } from 'src/@core/context/settingsContext'
import { NavLink, NavSectionTitle, VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import { fetcher } from 'src/framework/auth/useRefreshToken'
import { parseCookies } from 'nookies'
import { title } from 'process'
import { ConsoleNetworkOutline } from 'mdi-material-ui'

interface Props {
  settings: Settings
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle

  return VerticalNavLink
}
const VerticalNavItems = (props: Props) => {
  // ** Props
  const [user, setUser] = useState({ level: 'client' })

  const { verticalNavItems } = props
  useEffect(() => {
    fetcher(parseCookies().authorization).then(res => {
      if (res.status === 200) {
        setUser(res.data.data.user)
      }
    })
  }, [])

  const RenderMenuItems = verticalNavItems?.map((item: NavLink | NavSectionTitle, index: number) => {
    if (user.level !== 'root') {
      if (user.level !== 'admin') {
        if ('title' in item) {
          if (item.title === 'users') {
            return
          }
        }
      }
    }
    const TagName: any = resolveNavItemComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
