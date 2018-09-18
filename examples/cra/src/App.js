import React, {Component} from 'react'
import Agnostic from 'react-agnostic'
import logo from './logo.svg'
import './App.css'
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

const componentsCustom = {
  View,
  Text,
  Button,
}

// eslint-disable-next-line
const componentsVanilla = {
  View: 'div',
  Text: 'span',
}

const components = componentsCustom // componentsVanilla

class App extends Component {
  state = {
    x: 2,
    item: {
      name: 'ball',
      amount: 3,
    },
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Agnostic.ComponentsProvider components={components}>
          <UpdateCartItem
            item={this.state.item}
            updateCartItem={item => this.setState({item})}
          />
        </Agnostic.ComponentsProvider>
      </div>
    )
  }
}

export default App
