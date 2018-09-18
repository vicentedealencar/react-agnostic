import React from 'react'
import {ComponentsProvider} from 'react-agnostic'
import UpdateCartItem from './components/UpdateCartItem'

const Text = props => (
  <span
    {...props}
    style={{fontFamily: 'monospace', padding: 10, fontSize: 24}}
  />
)
const View = props => (
  <div
    {...props}
    style={{backgroundColor: '#222', padding: 20, color: 'white'}}
  />
)
const Button = props => (
  <button
    {...props}
    style={{
      border: '1px solid orange',
      display: 'inline',
      backgroundColor: 'gray',
      color: 'white',
      width: 30,
      height: 30,
      borderRadius: 15,
    }}
  />
)

const components = {
  View,
  Text,
  Button,
}

class App extends React.Component {
  state = {
    item: {
      name: 'ball',
      amount: 3,
    },
  }

  render() {
    return (
      <ComponentsProvider components={components}>
        <UpdateCartItem
          item={this.state.item}
          updateCartItem={item => this.setState({item})}
        />
      </ComponentsProvider>
    )
  }
}

export default App
