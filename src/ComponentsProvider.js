import React from 'react'
import {Provider} from './componentsContext'
import defaults from './defaults'

export default class ComponentsProvider extends React.PureComponent {
  state = {
    components: {
      ...defaults,
      ...this.props.components,
    },
  }

  render() {
    const {children} = this.props
    const {components} = this.state

    return <Provider value={components}>{children}</Provider>
  }
}
