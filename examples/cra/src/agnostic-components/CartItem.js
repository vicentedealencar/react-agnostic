import React from 'react'
import numeral from 'numeral'
// import {withComponents} from 'react-agnostic'
import RA from 'react-agnostic'
import _UpdateCartItem from './UpdateCartItem'

const {withComponents} = RA

const CartItem = ({
  item,
  components: {Text, View, Button},
  updateCartItem,
  UpdateCartItem = _UpdateCartItem,
  ...otherProps
}) => {
  const price = numeral(item.price)
    .multiply(item.amount)
    .format()

  return (
    <View {...otherProps}>
      <UpdateCartItem
        item={item}
        updateCartItem={updateCartItem}
        Button={Button}
        Text={Text}
      />
      <Text>
        {item.name} - {price}
      </Text>
    </View>
  )
}

export default withComponents(CartItem)
