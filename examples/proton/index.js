import React, {Component} from 'react' // import from react

import {render, Window, App, Text, Button, Box} from 'proton-native' // import the proton-native components

import {ComponentsProvider} from 'react-agnostic'
import UpdateCartItem from './UpdateCartItem'

const components = {Text, View: Box, Button}

class Example extends Component {
  state = {
    item: {
      name: 'ball',
      amount: 3,
    },
  }

  render() {
    return (
      <App>
        <Window
          title="Proton Native Rocks!"
          size={{w: 300, h: 300}}
          menuBar={false}
        >
          <Box>
            <ComponentsProvider components={components}>
              <UpdateCartItem
                item={this.state.item}
                updateCartItem={item => this.setState({item})}
              />
            </ComponentsProvider>
          </Box>
        </Window>
      </App>
    )
  }
}

render(<Example />) // and finally render your main component
