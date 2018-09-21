import React from 'react';
import { StyleSheet, Text, View as RNView, Button as RNButton } from 'react-native';
import { ComponentsProvider } from 'react-agnostic'
import UpdateCartItem from './UpdateCartItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row'
  }
});

const Button = props => <RNButton {...props} title={props.children} onPress={props.onClick} />

const View = props => <RNView {...props} style={[styles.row].concat(props.style)} />

const components = {Text, View, Button }
console.log('components', Object.keys(components));


export default class App extends React.Component {
  state = {
    item: {
      name: 'ball',
      amount: 3,
    },
  }

  render() {
    return (
      <ComponentsProvider components={components}>
        <View style={styles.container}>
          <UpdateCartItem
            item={this.state.item}
            updateCartItem={item => this.setState({item})}
          />
        </View>
      </ComponentsProvider>
    );
  }
}
