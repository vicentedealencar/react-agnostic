import React from 'react'
import { Provider } from './componentsContext'
import defaults from './defaults'

export default class ComponentsProvider extends React.PureComponent {
  state = {
    components: {
      ...defaults,
      ...this.props.components,
    },
  }

  render() {
    const { children } = this.props
    const { components } = this.state

    if (!Provider) {
      throw new Error('Provider not defined. Try using react > 16')
    }

    return <Provider value={components}>{children}</Provider>
  }
}
