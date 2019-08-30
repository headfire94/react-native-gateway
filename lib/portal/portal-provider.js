import React, { Component } from "react";
import PortalContext from "./portal-context";

class PortalProvider extends Component {
  addElement = ({ name, component }) => {
    this.setState(state => ({
      elements: {
        ...state.elements,
        [name]: component
      }
    }));
  };

  removeElement = ({ name }) => {
    this.setState(state => {
      const { [name]: removedElement, ...restElements } = state.elements;
      return {
        elements: restElements
      };
    });
  };

  state = {
    addElement: this.addElement,
    removeElement: this.removeElement,
    elements: {}
  };

  render() {
    return (
      <PortalContext.Provider value={this.state}>
        {this.props.children}
      </PortalContext.Provider>
    );
  }
}

export default PortalProvider;
