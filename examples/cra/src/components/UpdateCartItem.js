import React from 'react'
import Agnostic from 'react-agnostic'

const UpdateCartItem = ({item, updateCartItem, components}) => {
  const {Button, Text, View} = components
  return updateCartItem ? (
    <View>
      <Button
        disabled={item.amount <= 0}
        onClick={() => updateCartItem({...item, amount: item.amount - 1})}
      >
        -
      </Button>
      <Text>{item.amount}</Text>
      <Button
        onClick={() => updateCartItem({...item, amount: item.amount + 1})}
      >
        +
      </Button>
    </View>
  ) : (
    <Text>{item.amount}</Text>
  )
}

export default Agnostic.withComponents(UpdateCartItem)
