import React from 'react'
import { Consumer } from './componentsContext'
import defaults from './defaults'

export default function withComponents(WrappedComponent) {
  class WithComponents extends React.PureComponent {
    render() {
      const { components, ...passedProps } = this.props

      if (!Consumer) {
        throw new Error('Consumer not defined. Try using react > 16')
      }

      return (
        <Consumer>
          {contextComponents => {
            const passedComponents = {
              ...defaults,
              ...contextComponents,
              ...components,
            }
            return (
              <WrappedComponent
                {...passedProps}
                components={passedComponents}
              />
            )
          }}
        </Consumer>
      )
    }
  }
  WithComponents.displayName = `WithComponents(${getDisplayName(
    WrappedComponent,
  )})`
  return WithComponents
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
