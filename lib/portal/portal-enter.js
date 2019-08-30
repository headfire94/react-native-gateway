import { useContext, useEffect } from "react";
import PortalContext from "./portal-context";

const PortalEnter = ({ children, name }) => {
  const { addElement, removeElement } = useContext(PortalContext);

  useEffect(() => {
    removeElement({ name });
    addElement({
      name,
      component: children
    });

    return () => removeElement({ name });
  }, [children]);

  return null;
};

export default PortalEnter;
