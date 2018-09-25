import React from 'react'
import RX from 'reactxp'
import {ComponentsProvider} from 'react-agnostic'
import App from './App'

const styles = {
  roundButton: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#7d88a9',
  }),
  buttonText: RX.Styles.createTextStyle({
    fontSize: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    color: 'white',
  }),
  centerText: RX.Styles.createTextStyle({
    alignSelf: 'center',
  }),
}

const Text = props => (
  <RX.Text {...props} style={[styles.centerText].concat(props.style)} />
)

const Button = props => (
  <RX.Button
    {...props}
    onPress={props.onClick}
    style={[styles.roundButton].concat(props.style)}
  >
    <RX.Text style={[styles.buttonText].concat(props.style)}>
      {props.children}
    </RX.Text>
  </RX.Button>
)

const components = {
  Text,
  View: RX.View,
  Button,
}

RX.App.initialize(true, true)
RX.UserInterface.setMainView(
  <ComponentsProvider components={components}>
    <App />
  </ComponentsProvider>,
)
