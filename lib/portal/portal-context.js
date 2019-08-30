import React from 'react'

const PortalContext = React.createContext({
  elements: {},
  addElement: () => {},
  removeElement: () => {},
})

export default PortalContext
