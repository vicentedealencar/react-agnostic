import React from 'react'
import renderer from 'react-test-renderer'
import CartItem from '../CartItem'

test('CartItem renders correctly', () => {
  const component = (
    <CartItem
      item={{
        name: 'ball',
        amount: 3,
        price: 2,
      }}
    />
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
