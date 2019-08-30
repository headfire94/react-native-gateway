import { useContext } from 'react'
import PortalContext from './portal-context'

const PortalExit = () => {
  const { elements } = useContext(PortalContext)
  return Object.keys(elements).map((name) => elements[name])
}

export default PortalExit
