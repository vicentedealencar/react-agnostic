/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react'
import RX from 'reactxp'

import UpdateCartItem from './UpdateCartItem'

const styles = {
  scroll: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff',
  }),
  container: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }),
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
}

export default class SecondPanel extends RX.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: 'ball',
        amount: 3,
      },
    }
  }

  render() {
    return (
      <RX.View useSafeInsets={true}>
        <RX.ScrollView style={styles.scroll}>
          <RX.View style={styles.container}>
            <RX.Button
              style={styles.roundButton}
              onPress={this.props.onNavigateBack}
            >
              <RX.Text style={styles.buttonText}>Go Back</RX.Text>
            </RX.Button>

            <UpdateCartItem
              item={this.state.item}
              updateCartItem={item => this.setState({item})}
            />
          </RX.View>
        </RX.ScrollView>
      </RX.View>
    )
  }
}
