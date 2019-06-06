import React from 'react'
import withComponents from '../withComponents'

const UpdateCartItem = ({item, updateCartItem, components}) => {
  const {Button, Text, View} = components

  return updateCartItem
    ? React.createElement(
        View,
        null,
        React.createElement(
          Button,
          {
            disabled: item.amount <= 0,
            onClick: function onClick() {
              return updateCartItem(
                Object.assign({}, item, {amount: item.amount - 1}),
              )
            },
          },
          '-',
        ),
        React.createElement(Text, null, item.amount),
        React.createElement(
          Button,
          {
            onClick: function onClick() {
              return updateCartItem(
                Object.assign({}, item, {amount: item.amount + 1}),
              )
            },
          },
          '+',
        ),
      )
    : React.createElement(Text, null, item.amount)
  // return updateCartItem ? (
  //   <View>
  //     <Button
  //       disabled={item.amount <= 0}
  //       onClick={() => updateCartItem({...item, amount: item.amount - 1})}
  //     >
  //       -
  //     </Button>
  //     <Text>{item.amount}</Text>
  //     <Button
  //       onClick={() => updateCartItem({...item, amount: item.amount + 1})}
  //     >
  //       +
  //     </Button>
  //   </View>
  // ) : (
  //   <Text>{item.amount}</Text>
  // )
}

export default withComponents(UpdateCartItem)
